import React, { useCallback, useState, useEffect, Ref, forwardRef } from 'react'
import { Button, ButtonProps } from '../Button'

interface AsyncButtonProps extends ButtonProps {
  onClick?: (ev: React.MouseEvent<Element, MouseEvent>) => Promise<void> | void
}

function AsyncButton(props: AsyncButtonProps, ref: Ref<HTMLButtonElement>) {
  const { loading, onClick, ...otherProps } = props
  const [callbackResult, setCallbackResult] = useState<any>(undefined)
  const [inProgress, toggleInProgress] = useState(false)
  const spinnerIsVisible = loading ?? inProgress
  const handleClick = useCallback(
    (ev: React.MouseEvent<Element, MouseEvent>) => {
      if (spinnerIsVisible) {
        // While the spinner is shown, don't allow the button to propagate
        ev.preventDefault()
        ev.stopPropagation()
        return
      }

      setCallbackResult(onClick?.(ev))
    },
    [onClick, spinnerIsVisible],
  )

  useEffect(() => {
    if (!callbackResult) {
      return () => null
    }

    let didCancel = false
    const invokeOnClickCallback = async () => {
      try {
        toggleInProgress(_ => true)
        await callbackResult
      } finally {
        if (!didCancel) {
          toggleInProgress(_ => false)
        }
      }
    }

    invokeOnClickCallback()
    return () => {
      didCancel = true
    }
  }, [callbackResult])

  return <Button {...otherProps} onClick={handleClick} loading={spinnerIsVisible} ref={ref} />
}

const forwardRefAsyncButton = forwardRef(AsyncButton)

export { forwardRefAsyncButton as AsyncButton }
export type { AsyncButtonProps }
