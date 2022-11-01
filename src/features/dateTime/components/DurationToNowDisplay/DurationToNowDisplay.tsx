import humanizeDuration from 'humanize-duration'
import React, { HTMLAttributes, useMemo } from 'react'
import { createStylableComponent } from 'utils'
import { getDurationToNow } from '../../utils/duration'
import { DateTime } from '../../luxon'
import * as S from './DurationToNowDisplay.styles'

interface DurationToNowDisplayProps extends HTMLAttributes<HTMLSpanElement> {
  date: DateTime
}

function DurationToNowDisplay(props: DurationToNowDisplayProps) {
  const { date, ...otherProps } = props

  const dateDisplay = useMemo(() => {
    const duration = getDurationToNow(date)
    return humanizeDuration(duration.toMillis(), { language: 'es', largest: 1, round: true })
  }, [date])

  return <S.Span {...otherProps}>{dateDisplay}</S.Span>
}

const StylableDurationToNowDisplay = createStylableComponent(S, DurationToNowDisplay)

export { StylableDurationToNowDisplay as DurationToNowDisplay }
export type { DurationToNowDisplayProps }
