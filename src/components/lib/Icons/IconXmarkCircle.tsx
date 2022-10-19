import React from 'react'

interface IconXmarkCircleProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconXmarkCircle(props: IconXmarkCircleProps) {
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
      <path d="M12 1C5.89495 1 1 5.89495 1 12C1 18.1048 5.89495 23 12 23C18.1047 23 23 18.1048 23 12C23 5.89495 18.1048 1 12 1ZM17.5001 15.9601L15.9601 17.4999L12 13.5398L8.03995 17.4999L6.49989 15.9601L10.4601 12L6.49989 8.03995L8.03995 6.50016L12 10.4601L15.9601 6.50016L17.5001 8.03995L13.5399 12L17.5001 15.9601Z" />
    </svg>
  )
}

export { IconXmarkCircle }
export type { IconXmarkCircleProps }
