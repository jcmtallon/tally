import { ISODate } from 'types'
import { Address } from '../Address/Address'
import { ClientType } from './ClientType'

interface Client {
  clientId: string
  clientType: ClientType
  taxId: string
  name: string
  phone: string
  email: string
  notes: string
  address?: Address
  invoicesCount: number
  created: ISODate
  updated: ISODate
}

export type { Client }
