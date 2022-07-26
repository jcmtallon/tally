import React from 'react'
import { SelectProps } from 'components'
import { createStylableComponent } from 'utils'
import { CLIENT_TYPE } from 'services'
import * as S from './ClientTypeSelect.styles'

interface ClientTypeSelectProps extends Omit<SelectProps, 'options'> {}

function ClientTypeSelect(props: ClientTypeSelectProps) {
  return (
    <S.Select
      {...props}
      // TODO: improve this so we don't have to be jumping from forwardRef to ref
      // all the time.
      ref={props.forwardedRef}
      options={[
        { value: CLIENT_TYPE.INDIVIDUAL, label: 'Particular' },
        { value: CLIENT_TYPE.COMPANY, label: 'Empresa' },
      ]}
    />
  )
}

const StylableClientTypeSelect = createStylableComponent(S, ClientTypeSelect)

export { StylableClientTypeSelect as ClientTypeSelect }
export type { ClientTypeSelectProps }
