import { Address } from '../Address/Address'

interface User {
  userId: string
  settings?: {
    name?: string
    identificationNumber?: string
    address?: Address
    bankAccountNumber?: string
    bankAccountName?: string
    bankName?: string
    taxRate?: string
  }
}

export type { User }
