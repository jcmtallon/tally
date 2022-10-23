import React from 'react'

interface IconSuitcaseProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function IconSuitcase(props: IconSuitcaseProps) {
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
      <path d="M12 2.375C13.0419 2.375 14.0412 2.73716 14.7779 3.38182C15.5147 4.02648 15.9286 4.90082 15.9286 5.8125V6.5H8.07143V5.8125C8.07143 4.90082 8.48533 4.02648 9.22208 3.38182C9.95883 2.73716 10.9581 2.375 12 2.375V2.375ZM17.5 6.5V5.8125C17.5 4.53615 16.9205 3.31207 15.8891 2.40955C14.8576 1.50703 13.4587 1 12 1C10.5413 1 9.14236 1.50703 8.11091 2.40955C7.07946 3.31207 6.5 4.53615 6.5 5.8125V6.5H1V20.25C1 20.9793 1.33112 21.6788 1.92052 22.1945C2.50992 22.7103 3.30932 23 4.14286 23H19.8571C20.6907 23 21.4901 22.7103 22.0795 22.1945C22.6689 21.6788 23 20.9793 23 20.25V6.5H17.5Z" />
    </svg>
  )
}

export { IconSuitcase }
export type { IconSuitcaseProps }
