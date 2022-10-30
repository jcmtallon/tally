const CLIENT_TYPE = {
  INDIVIDUAL: 'INDIVIDUAL',
  COMPANY: 'COMPANY',
} as const

type ClientType = typeof CLIENT_TYPE[keyof typeof CLIENT_TYPE]

const isClientType = (value: string): value is ClientType =>
  (Object.values(CLIENT_TYPE) as readonly string[]).includes(value)

export { CLIENT_TYPE, isClientType }
export type { ClientType }
