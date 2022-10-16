import React from 'react'

interface IconPlusProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconPlus(props: IconPlusProps) {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C12.3789 2 12.7422 2.15051 13.0102 2.41842C13.2781 2.68633 13.4286 3.04969 13.4286 3.42857V10.5714H20.5714C20.9503 10.5714 21.3137 10.7219 21.5816 10.9898C21.8495 11.2578 22 11.6211 22 12C22 12.3789 21.8495 12.7422 21.5816 13.0102C21.3137 13.2781 20.9503 13.4286 20.5714 13.4286H13.4286V20.5714C13.4286 20.9503 13.2781 21.3137 13.0102 21.5816C12.7422 21.8495 12.3789 22 12 22C11.6211 22 11.2578 21.8495 10.9898 21.5816C10.7219 21.3137 10.5714 20.9503 10.5714 20.5714V13.4286H3.42857C3.04969 13.4286 2.68633 13.2781 2.41842 13.0102C2.15051 12.7422 2 12.3789 2 12C2 11.6211 2.15051 11.2578 2.41842 10.9898C2.68633 10.7219 3.04969 10.5714 3.42857 10.5714H10.5714V3.42857C10.5714 3.04969 10.7219 2.68633 10.9898 2.41842C11.2578 2.15051 11.6211 2 12 2V2Z"
      />
    </svg>
  )
}

export { IconPlus }
export type { IconPlusProps }
