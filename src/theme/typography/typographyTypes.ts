type FontSize = string
type FontWeight = number
type LineHeight = number
type LetterSpacing = string

interface FontType {
  fontSize: FontSize
  fontWeight: FontWeight
  lineHeight: LineHeight
  letterSpacing?: LetterSpacing // Not in use for now.
}

interface BodyFontType {
  regular: FontType
  strong: FontType
}

interface Typography {
  header: {
    h1: FontType
    h2: FontType
    h3: FontType
    h4: FontType
    h5: FontType
    h6: FontType
    h7: FontType
  }
  body: {
    lg: BodyFontType
    base: BodyFontType
    md: BodyFontType
    sm: BodyFontType
    xs: BodyFontType
    xxs: BodyFontType
  }
}

export type { Typography, BodyFontType, FontType }
