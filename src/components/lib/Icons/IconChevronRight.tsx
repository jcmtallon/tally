import React from 'react'

interface IconChevronRightProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconChevronRight(props: IconChevronRightProps) {
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
      <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
    </svg>
  )
}

export { IconChevronRight }
export type { IconChevronRightProps }
