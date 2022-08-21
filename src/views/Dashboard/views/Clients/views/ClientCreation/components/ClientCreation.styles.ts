import { SlidePanelLayout, Button } from 'components'
import { ClientForm } from 'features/clients'
import styled from 'styled-components'

const PanelLayout = styled(SlidePanelLayout)``

const FormWrapper = styled.div`
  padding: 16px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: overlay;
`

const Form = styled(ClientForm)``

// TODO: use SubmitButton with async logic instead
const SubmitButton = styled(Button).attrs({ size: 'large' })`
  width: fit-content;
`

export { PanelLayout, FormWrapper, Form, SubmitButton }
