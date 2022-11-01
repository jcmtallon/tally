import { DateTime, Duration } from '../luxon'

function getDurationToNow(dt: DateTime): Duration {
  const now = DateTime.now()
  return now.diff(dt)
}

export { getDurationToNow }
