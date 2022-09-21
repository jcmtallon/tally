import { InvoiceServiceEntry } from './InvoiceServiceEntry'
import { InvoiceStatus } from './InvoiceStatus'

interface Invoice {
  invoiceId: string
  invoiceNumber: string
  created: Date
  sent: Date
  paid: Date
  clientEmail: string
  clientName: string
  clientAddress: string
  services: InvoiceServiceEntry[]
  status: InvoiceStatus
  costAmount: string
  applicableTaxRate: string
  totalAmount: string
  draft?: boolean
}

export type { Invoice }
