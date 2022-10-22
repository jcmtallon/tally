import React from 'react'

interface IconSquareFillProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconSquareFill(props: IconSquareFillProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      aria-hidden
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {props.title && <title>{props.title}</title>}
      <path d="M1 6C1 3.23858 3.23858 1 6 1H18C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6Z" />
    </svg>
  )
}

export { IconSquareFill }
export type { IconSquareFillProps }
