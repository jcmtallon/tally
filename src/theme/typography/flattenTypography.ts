import { css, CSSObject } from 'styled-components'
import { typography } from './fontTypes'
import { Typography, BodyFontType, FontType } from './typographyTypes'

type FlattenFontType = ReturnType<typeof css>
type FlattenBodyFontType = FlattenFontType & {
  strong: FlattenFontType
}

interface FlattenTypography {
  header: Record<keyof Typography['header'], FlattenFontType>
  body: Record<keyof Typography['body'], FlattenBodyFontType>
}

const getFlattenFontType = (fontType: FontType): FlattenFontType => css(fontType as CSSObject)

const getFlattenBodyFontType = (fontType: BodyFontType): FlattenBodyFontType => {
  const flattenFontType = getFlattenFontType(fontType.regular) as FlattenBodyFontType
  Object.defineProperty(flattenFontType, 'strong', { value: getFlattenFontType(fontType.strong) })

  return flattenFontType
}

const flattenTypography: FlattenTypography = {
  header: {
    h1: getFlattenFontType(typography.header.h1),
    h2: getFlattenFontType(typography.header.h2),
    h3: getFlattenFontType(typography.header.h3),
    h4: getFlattenFontType(typography.header.h4),
    h5: getFlattenFontType(typography.header.h5),
    h6: getFlattenFontType(typography.header.h6),
    h7: getFlattenFontType(typography.header.h7),
  },
  body: {
    lg: getFlattenBodyFontType(typography.body.lg),
    base: getFlattenBodyFontType(typography.body.base),
    md: getFlattenBodyFontType(typography.body.md),
    sm: getFlattenBodyFontType(typography.body.sm),
    xs: getFlattenBodyFontType(typography.body.xs),
    xxs: getFlattenBodyFontType(typography.body.xxs),
  },
}

export { flattenTypography }
export type { FlattenTypography, FlattenFontType }
