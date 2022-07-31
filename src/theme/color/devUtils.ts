import assert from 'assert'

const visitedPathsSym = Symbol('[visited paths spy]')

function getVisitedPaths(spiedObject: unknown): string[][] {
  assert(typeof spiedObject === 'object', 'cant find visited paths on non-object')
  assert(spiedObject !== null, 'cant find visited paths on null')
  assert(visitedPathsSym in spiedObject, 'spied object was not wrapped with spyProxy')

  return (spiedObject as any)[visitedPathsSym]
}

function visitedPathsProxy<T extends object = any>(
  value: T,
  { path = [], root = value }: { path?: string[]; root?: T } = {},
): T {
  const proxy = new Proxy(value, {
    get: (target, prop, receiver) => {
      const value = Reflect.get(target, prop, receiver)
      const fullPath = [...path, String(prop)]

      if (typeof prop === 'string' && typeof value === 'object' && value !== null) {
        return visitedPathsProxy(value, { path: fullPath, root })
      }

      if (typeof value === 'string') {
        getVisitedPaths(root).push(fullPath)
      }

      return value
    },
  })

  if (value === root) {
    Object.defineProperty(proxy, visitedPathsSym, { value: [], writable: true })
  }

  return proxy
}

function getLastVisitedPath(spiedObject: unknown): string[] {
  const visitedPaths = getVisitedPaths(spiedObject)
  const lastPath = visitedPaths[visitedPaths.length - 1]
  return lastPath
}

export { visitedPathsProxy, getLastVisitedPath }
