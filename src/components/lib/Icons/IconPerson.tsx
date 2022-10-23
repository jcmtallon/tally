import React from 'react'

interface IconPersonProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconPerson(props: IconPersonProps) {
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
      <path d="M3.25 22.5C3.25 22.5 1.5 22.5 1.5 20.75C1.5 19 3.25 13.75 12 13.75C20.75 13.75 22.5 19 22.5 20.75C22.5 22.5 20.75 22.5 20.75 22.5H3.25ZM12 12C13.3924 12 14.7277 11.4469 15.7123 10.4623C16.6969 9.47774 17.25 8.14239 17.25 6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5C10.6076 1.5 9.27226 2.05312 8.28769 3.03769C7.30312 4.02226 6.75 5.35761 6.75 6.75C6.75 8.14239 7.30312 9.47774 8.28769 10.4623C9.27226 11.4469 10.6076 12 12 12V12Z" />
    </svg>
  )
}

export { IconPerson }
export type { IconPersonProps }
