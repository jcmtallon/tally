import { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore/lite'
import { Invoice } from '../../types'

// TODO

function docToInvoice(doc: QueryDocumentSnapshot<DocumentData>): Invoice {
  const data = doc.data()

  return {
    invoiceId: doc.id,
    invoiceNumber: '002',
    created: new Date(),
    sent: new Date(),
    paid: new Date(),
    clientName: 'Pepe',
    clientAddress: 'some address',
    services: [],
    status: 'DRAFT',
    costAmount: '',
    applicableTaxRate: '',
    totalAmount: '',
  }
}

function docsToInvoices(docs: QuerySnapshot<DocumentData>): Invoice[] {
  const invoices: Invoice[] = []

  docs.forEach(doc => {
    invoices.push(docToInvoice(doc))
  })

  return invoices
}

export { docsToInvoices, docToInvoice }
