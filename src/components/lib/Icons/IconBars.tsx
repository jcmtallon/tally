import React from 'react'

interface IconBarsProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconBars(props: IconBarsProps) {
  return (
    <svg
      fill="currentColor"
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
      <path d="M5.23077 23H1V14.2H5.23077V23ZM17.0769 23H12.8462V9.8H17.0769V23ZM23 23H18.7692V4.66667H23V23ZM11.1538 23H6.92308V1H11.1538V23Z" />
    </svg>
  )
}

export { IconBars }
export type { IconBarsProps }
