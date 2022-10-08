import { ISODate } from 'types'
import { Address } from '../Address/Address'

interface Client {
  clientId: string
  clientType: 'individual' | 'company'
  name: string
  phone: string
  email: string
  notes: string
  address?: Address
  created: ISODate
}

export type { Client }
