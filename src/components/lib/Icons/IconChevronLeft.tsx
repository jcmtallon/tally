import React from 'react'

interface IconChevronLeftProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconChevronLeft(props: IconChevronLeftProps) {
  return (
    <svg
      className={props.className}
      stroke="currentColor"
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
      <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
    </svg>
  )
}

export { IconChevronLeft }
export type { IconChevronLeftProps }
