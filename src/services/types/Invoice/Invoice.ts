import { InvoiceServiceEntry } from './InvoiceServiceEntry'
import { InvoiceStatus } from './InvoiceStatus'

interface Invoice {
  invoiceId: string
  invoiceNumber: string
  created: Date
  sent: Date
  paid: Date
  clientName: string
  clientAddress: string
  services: InvoiceServiceEntry[]
  status: InvoiceStatus
  costAmount: string
  applicableTaxRate: string
  totalAmount: string
}

export type { Invoice }
