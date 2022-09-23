import styled from 'styled-components'
import { Checkbox as BaseCheckbox } from '../Checkbox'
import { TableHead } from '../TableHead'
import { TableRow } from '../TableRow'
import { TableCell } from '../TableCell'
import { TableSortableCell as TableTableSortableCell } from '../TableSortableCell'

const Head = styled(TableHead)``
const Row = styled(TableRow)``
const Cell = styled(TableCell)``
const SortableCell = styled(TableTableSortableCell)``
const Checkbox = styled(BaseCheckbox)``

export { Head, Row, SortableCell, Checkbox, Cell }
