import React from 'react'

interface IconLastPageProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconLastPage(props: IconLastPageProps) {
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
      <path d="M7.707 17.707 13.414 12 7.707 6.293 6.293 7.707 10.586 12l-4.293 4.293zM15 6h2v12h-2z" />
    </svg>
  )
}

export { IconLastPage }
export type { IconLastPageProps }
