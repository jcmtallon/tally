import styled, { keyframes, css } from 'styled-components'
import { pickColor } from 'theme'
import { ActivityIndicatorColor, ActivityIndicatorSize } from './ActivityIndicatorTypes'

const spinnerColor: Record<ActivityIndicatorColor, ReturnType<typeof css>> = {
  neutral: css`
    color: ${pickColor(c => c.fg.neutral.default)};
  `,
  primary: css`
    color: ${pickColor(c => c.fg.primary.default)};
  `,
}

const Wrapper = styled.div<{ color: ActivityIndicatorColor }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  justify-self: stretch;

  ${props => spinnerColor[props.color]}
`

const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const spinnerSize: Record<ActivityIndicatorSize, number> = {
  small: 16,
  regular: 36,
  large: 48,
}

const Svg = styled.svg.attrs({
  viewBox: '25 25 50 50',
})<{ mountTime: number; size: ActivityIndicatorSize }>`
  animation: ${spin} 2000ms linear infinite;
  animation-delay: ${props => `${-(props.mountTime % 2000)}ms`};
  transform-origin: center center;
  width: ${props => `${spinnerSize[props.size] ?? 40}px`};
  height: ${props => `${spinnerSize[props.size] ?? 40}px`};
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
`

const Circle = styled.circle.attrs({
  cx: 50,
  cy: 50,
  r: 20,
})<{ mountTime: number }>`
  animation: ${dash} 1500ms ease-in-out infinite;
  animation-delay: ${props => `${-(props.mountTime % 1500)}ms`};

  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke: currentColor;
  stroke-width: 6px;
  stroke-miterlimit: 10;
  fill: none;
`

export { Circle, Span, Svg, Wrapper }
