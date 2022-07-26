import { Address } from '../Address/Address'

interface Client {
  clientId: string
  name: string
  phone: string
  email: string
  notes: string
  address?: Address
}

export type { Client }
