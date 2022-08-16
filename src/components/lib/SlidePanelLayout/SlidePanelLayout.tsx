import React, { ReactNode } from 'react'
import { createStylableComponent } from 'utils'
import { ActivityIndicator } from '../ActivityIndicator'
import { ErrorBoundary } from '../ErrorBoundary'
import { Togglable } from '../Togglable'
import * as S from './SlidePanelLayout.styles'

interface SlidePanelLayoutProps {
  className?: string
  title?: ReactNode
  children?: ReactNode
  footer?: ReactNode
}

function SlidePanelLayout(props: SlidePanelLayoutProps) {
  return (
    <S.Wrapper className={props.className}>
      <ErrorBoundary>
        <React.Suspense fallback={<ActivityIndicator />}>
          <Togglable enabled={Boolean(props.title)}>
            <S.PanelHeader>
              <S.TitleContainer>{props.title}</S.TitleContainer>
            </S.PanelHeader>
          </Togglable>
          <S.Content>{props.children}</S.Content>
          <Togglable enabled={Boolean(props.footer)}>
            <S.Footer>{props.footer}</S.Footer>
          </Togglable>
        </React.Suspense>
      </ErrorBoundary>
    </S.Wrapper>
  )
}

// TODO: Footer

const StylableSlidePanelLayout = createStylableComponent(S, SlidePanelLayout)

export { StylableSlidePanelLayout as SlidePanelLayout }
export type { SlidePanelLayoutProps }
