import { useCallback, useRef, useEffect } from 'react'

type AnyFunction = (...args: any[]) => any

function useImmutableCallback<T extends AnyFunction>(callback: T | undefined): T {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const immutableCallback = useCallback<any>((...args: any[]) => callbackRef.current?.(...args), [])

  return immutableCallback
}

export { useImmutableCallback }
