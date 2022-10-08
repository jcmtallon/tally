import { useDebounce, useImmutableCallback, useValueRef } from 'hooks'
import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import { Merge } from 'type-fest'
import { createStylableComponent } from 'utils'
import { InputProps } from '../Input'
import * as S from './DebounceInput.styles'

type DebounceInputProps = Merge<
  InputProps,
  {
    debounce?: number
    onChange?: (value: string) => void
  }
>

function DebounceInput(props: DebounceInputProps) {
  const { debounce, value, onChange, ...otherProps } = props

  const [innerValue, setInnerValue] = useState<string>(value ? value.toString() : '')
  const debouncedValue = useDebounce(innerValue, debounce)

  const onChangeRef = useImmutableCallback(onChange)
  const onValueRef = useValueRef(value)

  useEffect(() => {
    if (debouncedValue !== onValueRef.current) onChangeRef?.(debouncedValue)
  }, [debouncedValue, onChangeRef, onValueRef])

  useEffect(() => {
    setInnerValue(value ? value.toString() : '')
  }, [value])

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    setInnerValue(e.target.value)
  }, [])

  return <S.Input onChange={handleChange} value={innerValue} {...otherProps} />
}

const StylableDebounceInput = createStylableComponent(S, DebounceInput)

export { StylableDebounceInput as DebounceInput }
export type { DebounceInputProps }
