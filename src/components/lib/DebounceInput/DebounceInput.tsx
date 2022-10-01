import { useDebounce } from 'hooks'
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

  useEffect(() => {
    onChange?.(debouncedValue)
  }, [debouncedValue, onChange])

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    setInnerValue(e.target.value)
  }, [])

  return <S.Input onChange={handleChange} {...otherProps} />
}

const StylableDebounceInput = createStylableComponent(S, DebounceInput)

export { StylableDebounceInput as DebounceInput }
export type { DebounceInputProps }
