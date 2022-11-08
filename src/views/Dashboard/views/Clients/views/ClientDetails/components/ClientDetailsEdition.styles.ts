import { SlidePanelLayout, AsyncButton, Button } from 'components'
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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`

const EditModeButtonWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`

// TODO: use SubmitButton with async logic instead
const SubmitButton = styled(AsyncButton).attrs({ size: 'large' })`
  width: fit-content;
`

const CancelButton = styled(Button).attrs({ size: 'large', color: 'highlight' })`
  width: fit-content;
`

const DeleteButton = styled(Button).attrs({ size: 'large', color: 'highlight' })`
  width: fit-content;
`

const Form = styled(ClientForm)``

export {
  CancelButton,
  DeleteButton,
  EditModeButtonWrapper,
  Footer,
  Form,
  FormWrapper,
  PanelLayout,
  SubmitButton,
}
