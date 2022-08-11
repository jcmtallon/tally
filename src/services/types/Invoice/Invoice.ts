import { InvoiceServiceEntry } from './InvoiceServiceEntry'

interface Invoice {
  invoiceId: string
  invoiceNumber: string
  created: Date
  sent: Date
  paid: Date
  clientName: string
  clientAddress: string
  services: InvoiceServiceEntry[]
  status: 'draft' | 'sent' | 'paid' | 'cancelled'
  costAmount: string
  applicableTaxRate: string
  totalAmount: string
}

export type { Invoice }
