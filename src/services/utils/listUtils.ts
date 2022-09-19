// TODO: construct with same syntax as map, sort, reduce, etc.
function paginateData<T>(data: T[], page: number, limit: number): T[] {
  return data.slice(page * limit, page * limit + limit)
}

type Direction = 'asc' | 'desc'

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator<Key extends keyof any>(
  order: Direction,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function sortData<T extends {}>(data: T[], direction: Direction, orderBy: string): T[] {
  return [...data].sort(getComparator(direction, orderBy))
}

export { paginateData, sortData }
