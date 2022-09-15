import { RowData } from '@tanstack/react-table'

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: 'center' | 'inherit' | 'left' | 'right' | 'justify'
  }
}
