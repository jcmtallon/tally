import styled, { css } from 'styled-components'
import { radius } from 'theme'
import { Button as BaseButton, ButtonProps } from '../Button/Button'

type Css = ReturnType<typeof css>

type IconButtonSize = NonNullable<ButtonProps['size']>

function getSizeStyles(size: IconButtonSize): Css {
  const sizes: { [key in IconButtonSize]: Css } = {
    small: css`
      padding: 4px 4px;
      ${radius(r => r.sm)};
      font-size: 1rem; // 16px
      line-height: inherit;
      min-height: 32px;
      min-width: 32px;
    `,
    regular: css`
      padding: 5px 5px;
      ${radius(r => r.md)};
      font-size: 1.25rem; // 20px
      line-height: inherit;
      min-height: 40px;
      min-width: 40px;
    `,
    large: css`
      padding: 7px 7px;
      ${radius(r => r.base)};
      font-size: 1.5rem; // 24px
      line-height: inherit;
      min-height: 48px;
      min-width: 48px;
    `,
  }

  return sizes[size]
}

const Button = styled(BaseButton)<{ size: IconButtonSize }>`
  width: fit-content;
  transition: background-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${props => getSizeStyles(props.size)}
`

export { Button }
