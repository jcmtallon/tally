import { SlidePanelLayout } from 'components'
import styled from 'styled-components'

const PanelLayout = styled(SlidePanelLayout)``

const FormWrapper = styled.div`
  padding: 16px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: overlay;
`

const Form = styled.div``

export { PanelLayout, FormWrapper, Form }
