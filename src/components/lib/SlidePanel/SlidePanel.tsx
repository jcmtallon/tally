import { omit } from 'lodash'
import React, { ReactNode, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import { createStylableComponent } from 'utils'
import { Portal } from '../Portal/Portal'
import * as S from './SlidePanel.styles'

interface SlidePanelProps {
  animationTimeout?: number
  className?: string
  children?: ReactNode
  show?: boolean

  onCloseRequest?: () => void
  onExited?: () => void
}

function SlidePanel(props: SlidePanelProps) {
  const {
    children,
    show,
    animationTimeout = S.animationTimeout,
    onCloseRequest,
    onExited,
    ...otherProps
  } = props

  // To solve issue CSSTransition using findDOMNode which is deprecated
  // See: https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
  const nodeRef = React.useRef(null)

  const handleBackdropClick = useCallback(() => {
    onCloseRequest?.()
  }, [onCloseRequest])

  return (
    <Portal id="slide-panel">
      <CSSTransition nodeRef={nodeRef} in={show} unmountOnExit timeout={animationTimeout} onExited={onExited}>
        <S.Container ref={nodeRef} {...otherProps}>
          <S.Backdrop onClick={handleBackdropClick} />
          {/* TODO: Add suspense */}
          <S.Panel>{children}</S.Panel>
        </S.Container>
      </CSSTransition>
    </Portal>
  )
}

// TODO: remove this comment when `animationTimeout` is used of remove the omit if it's decided we don't need such feature.
const StylableSlidePanel = createStylableComponent(omit(S, ['animationTimeout']), SlidePanel)

export { StylableSlidePanel as SlidePanel }
export type { SlidePanelProps }
