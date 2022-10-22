import React from 'react'

interface IconCheckmarkSquareFillProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconCheckmarkSquareFill(props: IconCheckmarkSquareFillProps) {
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
        d="M6 1C3.23858 1 1 3.23858 1 6V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V6C23 3.23858 20.7614 1 18 1H6ZM17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289C17.3166 7.90237 16.6834 7.90237 16.2929 8.29289L10.25 14.3358L7.95711 12.0429C7.56658 11.6524 6.93342 11.6524 6.54289 12.0429C6.15237 12.4334 6.15237 13.0666 6.54289 13.4571L9.54289 16.4571C9.93342 16.8476 10.5666 16.8476 10.9571 16.4571L17.7071 9.70711Z"
      />
    </svg>
  )
}

export { IconCheckmarkSquareFill }
export type { IconCheckmarkSquareFillProps }
