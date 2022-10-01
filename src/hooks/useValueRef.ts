import { useEffect, useRef, MutableRefObject } from 'react'

function useValueRef<T>(value: T): MutableRefObject<T> {
  const ref = useRef(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref
}

export { useValueRef }
