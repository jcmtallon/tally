import React from 'react'

interface IconPeopleProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconPeople(props: IconPeopleProps) {
  return (
    <svg
      fill="currentColor"
      strokeWidth="0"
      baseProfile="tiny"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4 20.5C10.4 20.5 9 20.5 9 19.0833C9 17.6667 10.4 13.4167 16 13.4167C21.6 13.4167 23 17.6667 23 19.0833C23 20.5 21.6 20.5 21.6 20.5H10.4ZM16 12C17.1139 12 18.1822 11.5522 18.9698 10.7552C19.7575 9.95817 20.2 8.87717 20.2 7.75C20.2 6.62283 19.7575 5.54183 18.9698 4.7448C18.1822 3.94777 17.1139 3.5 16 3.5C14.8861 3.5 13.8178 3.94777 13.0302 4.7448C12.2425 5.54183 11.8 6.62283 11.8 7.75C11.8 8.87717 12.2425 9.95817 13.0302 10.7552C13.8178 11.5522 14.8861 12 16 12ZM7.76817 20.5C7.57581 20.063 7.47988 19.5838 7.48789 19.1001C7.48789 17.2033 8.37024 15.2504 10 13.8926C9.18654 13.6222 8.33903 13.4899 7.48789 13.5006C2.29758 13.5006 1 17.7002 1 19.1001C1 20.5 2.29758 20.5 2.29758 20.5H7.76817ZM8.97487 10.9749C8.3185 11.6313 7.42826 12 6.5 12C5.57174 12 4.6815 11.6313 4.02513 10.9749C3.36875 10.3185 3 9.42826 3 8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5C7.42826 5 8.3185 5.36875 8.97487 6.02513C9.63125 6.6815 10 7.57174 10 8.5C10 9.42826 9.63125 10.3185 8.97487 10.9749Z"
      />
    </svg>
  )
}

export { IconPeople }
export type { IconPeopleProps }
