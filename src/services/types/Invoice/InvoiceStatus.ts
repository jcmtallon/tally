const INVOICE_STATUS = {
  DRAFT: 'DRAFT',
  SENT: 'SENT',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED',
} as const

type InvoiceStatus = typeof INVOICE_STATUS[keyof typeof INVOICE_STATUS]

const isInvoiceStatus = (value: string): value is InvoiceStatus =>
  (Object.values(INVOICE_STATUS) as readonly string[]).includes(value)

export { INVOICE_STATUS, isInvoiceStatus }
export type { InvoiceStatus }
