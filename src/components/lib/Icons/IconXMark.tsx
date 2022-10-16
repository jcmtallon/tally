import React from 'react'

interface IconXMarkProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconXMark(props: IconXMarkProps) {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      baseProfile="tiny"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      aria-hidden
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.3242 3.20711C22.7148 2.81658 22.7148 2.18342 22.3242 1.79289C21.9337 1.40237 21.3006 1.40237 20.91 1.79289L12.0586 10.6444L3.20711 1.79289C2.81658 1.40237 2.18342 1.40237 1.79289 1.79289C1.40237 2.18342 1.40237 2.81658 1.79289 3.20711L10.6444 12.0586L1.79289 20.91C1.40237 21.3006 1.40237 21.9337 1.79289 22.3242C2.18342 22.7148 2.81658 22.7148 3.20711 22.3242L12.0586 13.4728L20.91 22.3242C21.3006 22.7148 21.9337 22.7148 22.3242 22.3242C22.7148 21.9337 22.7148 21.3006 22.3242 20.91L13.4728 12.0586L22.3242 3.20711Z"
      />
    </svg>
  )
}

export { IconXMark }
export type { IconXMarkProps }
