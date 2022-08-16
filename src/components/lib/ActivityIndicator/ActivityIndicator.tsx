import React, { HTMLProps, Ref, useRef, forwardRef } from 'react'
import { ActivityIndicatorColor, ActivityIndicatorSize } from './ActivityIndicatorTypes'
import * as S from './ActivityIndicator.styles'

interface ActivityIndicatorProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  size?: ActivityIndicatorSize
  color?: ActivityIndicatorColor
}

function ActivityIndicator(props: ActivityIndicatorProps, ref: Ref<HTMLDivElement>) {
  const { size = 'regular', color = 'highlight', ...otherProps } = props

  // Prevents jumping in the activity indicator when unmounting->mounting happens in
  // quick succession.
  // See: https://dev.to/selbekk/how-to-stop-your-spinner-from-jumping-in-react-5cmp
  const mountTime = useRef(Date.now())

  return (
    <S.Wrapper
      {...otherProps}
      ref={ref}
      as={undefined}
      role="progressbar"
      aria-label="loading spinner"
      color={color}>
      <S.Svg mountTime={mountTime.current} role="img" size={size}>
        {/* <title> acts as an accessible name. Not displayed for visual users.
        See: https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/ */}
        <title>Loading</title>
        <S.Circle mountTime={mountTime.current} />
      </S.Svg>
    </S.Wrapper>
  )
}

const RefForwardingActivityIndicator = forwardRef(ActivityIndicator)

export { RefForwardingActivityIndicator as ActivityIndicator }
export type { ActivityIndicatorProps }
