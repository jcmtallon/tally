import { SlidePanelLayout, Button } from 'components'
import styled from 'styled-components'

const PanelLayout = styled(SlidePanelLayout)``

const EditModeButton = styled(Button).attrs({ size: 'large' })`
  width: fit-content;
`

export { PanelLayout, EditModeButton }
