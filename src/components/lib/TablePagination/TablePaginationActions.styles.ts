import styled from 'styled-components'
import { IconButton as BaseIconButton } from '../IconButton'
import { IconChevronLeft, IconChevronRight, IconFirstPage, IconLastPage } from '../icons'

const Container = styled.div`
  display: flex;
  column-gap: 5px;
`

const IconButton = styled(BaseIconButton)``

const FirstPageIcon = styled(IconFirstPage)``
const LastPageIcon = styled(IconLastPage)``
const LeftIcon = styled(IconChevronLeft)``
const RightIcon = styled(IconChevronRight)``

export { Container, IconButton, FirstPageIcon, LastPageIcon, LeftIcon, RightIcon }
