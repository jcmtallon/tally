import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './InstallHomeLogo.styles'

interface InstallHomeLogoProps extends HTMLAttributes<HTMLDivElement> {}

function InstallHomeLogo(props: InstallHomeLogoProps) {
  const { ...otherProps } = props
  return (
    <S.Wrapper {...otherProps}>
      <S.Icon />
      <S.TextWrapper>
        <S.Title>Install Home</S.Title>
        <S.Subtitle>Fontantería</S.Subtitle>
      </S.TextWrapper>
    </S.Wrapper>
  )
}

const StylableInstallHomeLogo = createStylableComponent(S, InstallHomeLogo)

export { StylableInstallHomeLogo as InstallHomeLogo }
export type { InstallHomeLogoProps }
