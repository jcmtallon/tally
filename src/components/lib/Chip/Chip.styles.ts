import styled, { css } from 'styled-components'
import { radius, Theme, typo } from 'theme'
import { IconXMark } from '../icons'
import { ChipColor, ChipSize, ChipVariant } from './Chip.types'

const padding: Record<ChipSize, string> = {
  regular: '1px 9px',
}

const minHeight: Record<ChipSize, string> = {
  regular: '24px',
}

const gap: Record<ChipSize, string> = {
  regular: '4px',
}

// In this case, we decided to use palette colors instead of color tokens because
// we expect chips to display the same colors in all colors modes and do not always
// have correspondence with the semantics of color tokens (like yellow for warnings and etc)

const getSolidChipColor = (theme: Theme): Record<ChipColor, string> => ({
  lightNavy: theme.palette.grey[15],
  blue: theme.palette.blue[30],
  green: theme.palette.green[30],
  navy: theme.palette.grey[20],
  red: theme.palette.red[30],
  yellow: theme.palette.yellow[30],
})

const getOutlineColor = (theme: Theme): Record<ChipColor, string> => ({
  lightNavy: theme.palette.grey[40],
  blue: theme.palette.blue[70],
  green: theme.palette.green[70],
  navy: theme.palette.grey[85],
  red: theme.palette.red[70],
  yellow: theme.palette.yellow[70],
})

const fontSize: Record<ChipSize, ReturnType<typeof css>> = {
  regular: css`
    ${typo(t => t.body.md)};
  `,
}

function getSolidStyles(color: ChipColor, theme: Theme) {
  return css`
    background-color: ${getSolidChipColor(theme)[color]};
    border: 1px solid ${getSolidChipColor(theme)[color]};
  `
}

function getOutlineStyles(color: ChipColor, theme: Theme) {
  return css`
    border: 1px solid ${getOutlineColor(theme)[color]};
    color: ${getOutlineColor(theme)[color]};
  `
}

const Chip = styled.div<{
  size: ChipSize
  variant: ChipVariant
  color: ChipColor
}>`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: ${props => padding[props.size]};
  column-gap: ${props => gap[props.size]};
  ${radius(r => r.xxl)};
  ${props => fontSize[props.size]};
  min-height: ${props => minHeight[props.size]};
  user-select: none;
  white-space: nowrap;

  ${({ variant, color, theme }) =>
    variant === 'solid' ? getSolidStyles(color, theme) : getOutlineStyles(color, theme)}
`

const iconFontSize: Record<ChipSize, string> = {
  regular: '1rem', // 16px,
}

const IconWrapper = styled.div<{ size: ChipSize }>`
  height: fit-content;
  display: flex;
  font-size: ${props => iconFontSize[props.size]};
`

const deleteIconFontSize: Record<ChipSize, string> = {
  regular: '0.75rem', // 12px
}

const DeleteIconWrapper = styled.div<{ size: ChipSize }>`
  height: fit-content;
  display: flex;
  font-size: ${props => deleteIconFontSize[props.size]};
`

const DeleteIcon = styled(IconXMark)``

export { Chip, IconWrapper, DeleteIcon, DeleteIconWrapper }
