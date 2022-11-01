interface Address {
  street: string
  postalCode: string
  city: string
  subAdministrativeArea?: string
  administrativeArea?: string
  country?: string
  countryCode?: string
  coordinate?: {
    lon: number
    lat: number
  }
  timezone?: string
}

export type { Address }
