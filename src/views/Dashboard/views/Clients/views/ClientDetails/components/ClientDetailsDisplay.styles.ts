import { SlidePanelLayout, Button, IconPlusFill } from 'components'
import styled from 'styled-components'
import { fg, pickColor, typo } from 'theme'
import { ClientTypeDisplay } from 'features/clients'

const PanelLayout = styled(SlidePanelLayout)``

const Wrapper = styled.div`
  padding: 16px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: overlay;
  row-gap: 24px;
`

const DetailsSection = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  row-gap: 14px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${pickColor(c => c.stroke.neutral.default)};
`

const FieldName = styled.div`
  ${fg(f => f.neutral.muted)};
`

const FieldValue = styled.div``

const ClientName = styled(ClientTypeDisplay)``

const SectionTitle = styled.h2`
  ${fg(f => f.primary.default)};
  ${typo(t => t.header.h6)};
`

const InvoicesSection = styled.div``

const InvoiceCreateButton = styled(IconPlusFill)`
  color: ${pickColor(c => c.specific.activable.primary.quiet)};
  :hover {
    color: ${pickColor(c => c.specific.activable.primary.hover)};
  }

  :active {
    color: ${pickColor(c => c.specific.activable.primary.active)};
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`

const EditModeButton = styled(Button).attrs({ size: 'large' })`
  width: fit-content;
`

const DeleteButton = styled(Button).attrs({ size: 'large', color: 'highlight' })`
  width: fit-content;
`

export {
  ClientName,
  DeleteButton,
  DetailsSection,
  EditModeButton,
  FieldName,
  FieldValue,
  Footer,
  InvoiceCreateButton,
  InvoicesSection,
  PanelLayout,
  SectionTitle,
  Wrapper,
}
