interface Address {
  street: string
  postal_code: string
  city: string
  sub_administrative_area: string
  administrative_area: string
  country: string
  country_code: string
  coordinate: {
    lon: number
    lat: number
  }
  timezone: string
}

export type { Address }
