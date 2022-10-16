import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './DashboardControls.styles'

interface DashboardControlsProps extends HTMLAttributes<HTMLDivElement> {}

function DashboardControls(props: DashboardControlsProps) {
  const { ...otherProps } = props
  return (
    <S.Wrapper {...otherProps}>
      <S.Logo />
      <S.SessionControls>Cerrar sesión</S.SessionControls>
    </S.Wrapper>
  )
}

const StylableDashboardControls = createStylableComponent(S, DashboardControls)

export { StylableDashboardControls as DashboardControls }
export type { DashboardControlsProps }
