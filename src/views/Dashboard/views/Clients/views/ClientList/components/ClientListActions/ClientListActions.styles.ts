import { Button as BaseButton, IconXmarkCircle } from 'components'
import styled from 'styled-components'
import { pickColor } from 'theme'

const Container = styled.div`
  display: flex;
  justify-content: end;
`

const Actions = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 10px;
  align-items: center;
  min-height: 40px;
`

const SelectedLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`

const Button = styled(BaseButton).attrs({ color: 'highlight', size: 'regular' })``

const CloseIcon = styled(IconXmarkCircle)`
  color: ${pickColor(c => c.specific.activable.neutral.quiet)};
  :hover {
    color: ${pickColor(c => c.specific.activable.neutral.hover)};
  }

  :active {
    color: ${pickColor(c => c.specific.activable.neutral.active)};
  }
`

export { Container, Actions, Button, SelectedLabelWrapper, CloseIcon }
