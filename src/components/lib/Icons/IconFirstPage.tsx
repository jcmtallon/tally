import React from 'react'

interface IconFirstPageProps {
  className?: string
}

function IconFirstPage(props: IconFirstPageProps) {
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
      role="img"
      xmlns="http://www.w3.org/2000/svg">
      <title>First Page</title>
      <path d="m16.293 17.707 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L10.586 12zM7 6h2v12H7z" />
    </svg>
  )
}

export { IconFirstPage }
export type { IconFirstPageProps }
