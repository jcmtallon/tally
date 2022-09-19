function isNumber(value: string) {
  return value !== '' && !Number.isNaN(Number(value))
}

export { isNumber }
