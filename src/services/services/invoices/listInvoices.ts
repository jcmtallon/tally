import { collection, getDocs, WhereFilterOp, where, query } from 'firebase/firestore/lite'
import { Invoice } from '../../types'
import { firestore } from '../../firestoreSetup'

interface ListInvoicesOptions {
  name?: string
}

const listInvoices = async (options: ListInvoicesOptions): Promise<Invoice[]> => {
  const { name } = options

  const filters: [string, WhereFilterOp, string][] = []

  if (name) filters.push(['name', '==', name])

  const clientsRef = collection(firestore, `invoices`)
  const whereArray = filters.map(f => where(f[0], f[1], f[2]))
  const q = query(clientsRef, ...whereArray)
  const docs = await getDocs(q)

  const invoices: Invoice[] = []

  // Temporary mock data
  const mockData: Invoice[] = [
    {
      invoiceId: '1',
      invoiceNumber: '002',
      created: new Date(),
      sent: new Date(),
      paid: new Date(),
      clientName: 'Pepe',
      clientAddress: 'some address',
      services: [],
      status: 'draft',
      costAmount: '5 EUR',
      applicableTaxRate: '',
      totalAmount: '',
    },
  ]

  docs.forEach(doc => {
    const data = doc.data()
    invoices.push({
      invoiceId: doc.id,
      invoiceNumber: '002',
      created: new Date(),
      sent: new Date(),
      paid: new Date(),
      clientName: 'Pepe',
      clientAddress: 'some address',
      services: [],
      status: 'draft',
      costAmount: '',
      applicableTaxRate: '',
      totalAmount: '',
    })
  })

  return mockData // Put clients back.
}

export { listInvoices }
