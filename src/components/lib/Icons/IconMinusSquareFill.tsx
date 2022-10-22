import React from 'react'

interface IconMinusSquareFillProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconMinusSquareFill(props: IconMinusSquareFillProps) {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1C3.23858 1 1 3.23858 1 6V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V6C23 3.23858 20.7614 1 18 1H6ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H7Z"
      />
    </svg>
  )
}

export { IconMinusSquareFill }
export type { IconMinusSquareFillProps }
