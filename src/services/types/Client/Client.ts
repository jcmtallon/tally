import { Address } from '../Address/Address'

interface Client {
  clientId: string
  clientType: 'individual' | 'company'
  name: string
  phone: string
  email: string
  notes: string
  address?: Address
}

export type { Client }
