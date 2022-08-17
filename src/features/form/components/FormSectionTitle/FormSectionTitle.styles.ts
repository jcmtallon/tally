import styled from 'styled-components'
import { fg, typo } from 'theme'

const FormSectionTitle = styled.h2`
  ${typo(t => t.header.h7)};
  ${fg(f => f.primary.default)};
`

export { FormSectionTitle }
