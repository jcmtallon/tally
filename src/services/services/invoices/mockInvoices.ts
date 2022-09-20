import { Invoice } from '../../types'

// Temporary mock data. TODO: remove
const mockInvoices: Partial<Invoice>[] = [
  {
    invoiceId: '1',
    invoiceNumber: '002',
    created: new Date(),
    sent: new Date(),
    paid: new Date(),
    clientName: 'Pepe',
    clientAddress: 'some address',
    services: [],
    status: 'DRAFT',
    costAmount: '4 EUR',
    applicableTaxRate: '',
    totalAmount: '',
  },
  { invoiceId: '2', clientName: 'Pepita María 2', costAmount: '5 EUR', status: 'DRAFT' },
  { invoiceId: '3', clientName: 'Pepita María 3', costAmount: '6 EUR', status: 'DRAFT' },
  { invoiceId: '4', clientName: 'Pepita María 4', costAmount: '7 EUR', status: 'DRAFT' },
  { invoiceId: '5', clientName: 'Pepita María 5', costAmount: '8 EUR', status: 'DRAFT' },
  { invoiceId: '6', clientName: 'Pepita María 6', costAmount: '9 EUR', status: 'PAID' },
  { invoiceId: '7', clientName: 'Pepita María 7', costAmount: '10 EUR', status: 'PAID' },
  { invoiceId: '8', clientName: 'Pepita María 8', costAmount: '11 EUR', status: 'PAID' },
  { invoiceId: '9', clientName: 'Pepita María 9', costAmount: '12 EUR', status: 'PAID' },
  { invoiceId: '10', clientName: 'Pepita María 10', costAmount: '13 EUR', status: 'SENT' },
  { invoiceId: '11', clientName: 'Pepita María 11', costAmount: '14 EUR', status: 'SENT' },
  { invoiceId: '12', clientName: 'Pepita María 12', costAmount: '15 EUR', status: 'SENT' },
  { invoiceId: '13', clientName: 'Pepita María 13', costAmount: '16 EUR', status: 'CANCELLED' },
  { invoiceId: '14', clientName: 'Pepita María 14', costAmount: '17 EUR', status: 'CANCELLED' },
  { invoiceId: '15', clientName: 'Pepita María 15', costAmount: '18 EUR', status: 'CANCELLED' },
  { invoiceId: '16', clientName: 'Pepita María 16', costAmount: '19 EUR', status: 'CANCELLED' },
  { invoiceId: '17', clientName: 'Pepita María 17', costAmount: '20 EUR', status: 'CANCELLED' },
]

export { mockInvoices }
