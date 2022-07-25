import { FlattenTypography, FlattenFontType, flattenTypography } from './flattenTypography'

function typo(pickFontType: (t: FlattenTypography) => FlattenFontType): FlattenFontType {
  return pickFontType(flattenTypography)
}

export { typo }
