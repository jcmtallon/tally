import { InvoiceServiceEntry } from './InvoiceServiceEntry'

interface Invoice {
  invoiceId: string
  invoiceNumber: string
  created: Date
  paid: Date
  clientName: string
  clientAddress: string
  services: InvoiceServiceEntry[]
  status: 'draft' | 'sent' | 'paid' | 'cancelled'
  applicableTaxRate: string
  totalAmount: string
}

export type { Invoice }
