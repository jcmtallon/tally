const CLIENT_TYPE = {
  INDIVIDUAL: 'INDIVIDUAL',
  COMPANY: 'COMPANY',
} as const

type ClientType = typeof CLIENT_TYPE[keyof typeof CLIENT_TYPE]

export { CLIENT_TYPE }
export type { ClientType }
