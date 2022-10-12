import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './InstallHomeLogo.styles'

interface InstallHomeLogoProps extends HTMLAttributes<HTMLDivElement> {}

function InstallHomeLogo(props: InstallHomeLogoProps) {
  const { ...otherProps } = props
  return <>INSTALL HOME</>
}

const StylableInstallHomeLogo = createStylableComponent(S, InstallHomeLogo)

export { StylableInstallHomeLogo as InstallHomeLogo }
export type { InstallHomeLogoProps }
