import { useEffect, useRef } from 'react'

function useFieldAutoFocusEffect<U extends HTMLSelectElement>(timeout: number = 0) {
  const fieldRef = useRef<U>(null)

  useEffect(() => {
    setTimeout(() => {
      fieldRef.current?.focus?.()
    }, timeout)
  }, [timeout])

  return fieldRef
}

export { useFieldAutoFocusEffect }
