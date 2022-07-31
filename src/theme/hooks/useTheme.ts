import { useCallback, useMemo } from 'react'
import { useTheme as useStyledComponentsTheme } from 'styled-components'
import { pickRadius } from '../borderRadius/borderRadius'
import { pickColor, pickFg, pickBg, pickCanvas, pickStroke } from '../color'
import { pickShadow } from '../shadows/shadows'
import { Theme } from '../themeTypes'

function useTheme() {
  const theme = useStyledComponentsTheme() as Theme

  const shadow = useCallback((s: Parameters<typeof pickShadow>[0]) => pickShadow(s)({ theme }), [theme])
  const radius = useCallback((r: Parameters<typeof pickRadius>[0]) => pickRadius(r)({ theme }), [theme])
  const color = useCallback((r: Parameters<typeof pickColor>[0]) => pickColor(r)({ theme }), [theme])
  const fg = useCallback((r: Parameters<typeof pickFg>[0]) => pickFg(r)({ theme }), [theme])
  const bg = useCallback((r: Parameters<typeof pickBg>[0]) => pickBg(r)({ theme }), [theme])
  const stroke = useCallback((r: Parameters<typeof pickStroke>[0]) => pickStroke(r)({ theme }), [theme])
  const canvas = useCallback(() => pickCanvas()({ theme }), [theme])

  return useMemo(
    () => ({
      theme,
      pickShadow: shadow,
      pickRadius: radius,
      pickColor: color,
      pickFg: fg,
      pickBg: bg,
      pickStroke: stroke,
      pickCanvas: canvas,
    }),
    [theme, shadow, radius, color, fg, bg, stroke, canvas],
  )
}

export { useTheme }
