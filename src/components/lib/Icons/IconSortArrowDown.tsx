import React from 'react'

interface IconSortArrowDownProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconSortArrowDown(props: IconSortArrowDownProps) {
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
      <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z" />
    </svg>
  )
}

export { IconSortArrowDown }
export type { IconSortArrowDownProps }
