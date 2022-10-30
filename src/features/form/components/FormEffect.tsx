import { useFormikContext } from 'formik'
import React, { useEffect } from 'react'

interface FormEffectProps {
  onDirtyChange?: (dirty: boolean) => void
}

function FormEffect(props: FormEffectProps) {
  const { onDirtyChange } = props

  const { dirty } = useFormikContext()

  useEffect(() => {
    onDirtyChange?.(dirty)
  }, [dirty, onDirtyChange])

  return <></>
}

export { FormEffect }
export type { FormEffectProps }
