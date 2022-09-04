import styled from 'styled-components'
import { Button } from '../Button'
import { IconChevronLeft, IconChevronRight, IconFirstPage, IconLastPage } from '../icons'

const Container = styled.div`
  display: flex;
  column-gap: 5px;
`

const IconButton = styled(Button)``

const FirstPageIcon = styled(IconFirstPage)``
const LastPageIcon = styled(IconLastPage)``
const LeftIcon = styled(IconChevronLeft)``
const RightIcon = styled(IconChevronRight)``

export { Container, IconButton, FirstPageIcon, LastPageIcon, LeftIcon, RightIcon }
