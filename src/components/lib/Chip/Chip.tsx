import React, { forwardRef, Ref, ReactNode, HTMLAttributes } from 'react'
import { ChipColor, ChipSize, ChipVariant } from './Chip.types'
import * as S from './Chip.styles'

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  /** The text content of the component. */
  label?: string

  /** If `true` the chip will appear clickable and focusable.
   * If false` the chip will not appear clickable, even if onClick prop is defined.
   * Note: this controls the UI and does not affect the onClick event.  */
  clickable?: boolean

  /** The color of the component. Displays same exact color in all color modes (light and dark mode)  */
  color?: ChipColor

  /** Icon element displayed after the text content */
  endIcon?: ReactNode

  /** Callback fired when the delete icon is clicked. If set, the delete icon will be shown. */
  onDelete?: () => void

  /** Provide a user-friendly name for the delete icon button. Important for screen reader users. */
  deleteIconAriaLabel?: string

  /** Size of the component */
  size?: ChipSize

  /** Icon element displayed before the text content */
  startIcon?: ReactNode

  /** The look of the component */
  variant?: ChipVariant

  /** This component does not accept children */
  children?: never[]
}

function Chip(props: ChipProps, ref: Ref<HTMLDivElement>) {
  const {
    label,
    startIcon,
    endIcon,
    size = 'regular',
    variant = 'solid',
    color = 'navy',
    clickable = false,
    onDelete,
    deleteIconAriaLabel = 'delete',
    ...otherProps
  } = props

  const handleOnDelete: React.MouseEventHandler<SVGSVGElement> | undefined = e => {
    e.stopPropagation()
    onDelete?.()
  }

  const isClickableChip = Boolean(clickable || otherProps.onClick)

  return (
    <S.Chip
      color={color}
      size={size}
      variant={variant}
      role={isClickableChip ? 'button' : undefined}
      tabIndex={isClickableChip ? 0 : undefined}
      {...otherProps}
      ref={ref}>
      {startIcon && <S.IconWrapper size={size}>{startIcon}</S.IconWrapper>}
      {label}
      {endIcon && <S.IconWrapper size={size}>{endIcon}</S.IconWrapper>}
      {onDelete && (
        <S.DeleteIconWrapper size={size}>
          <S.DeleteIcon
            aria-hidden="false"
            tabIndex={0}
            role="button"
            aria-label={deleteIconAriaLabel}
            onClick={handleOnDelete}
          />
        </S.DeleteIconWrapper>
      )}
    </S.Chip>
  )
}

const forwardRefChip = forwardRef(Chip)

export { forwardRefChip as Chip }
export type { ChipProps }
