interface Transition {
  regular: string
}

const transitions: Transition = {
  regular: '0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
}

type ReturnTypeProps = { theme: { transition: Transition } }

function pickTransition(pickTrans: (t: Transition) => string): (props?: ReturnTypeProps) => string {
  return (props?: ReturnTypeProps) => {
    if (!props?.theme?.transition) {
      // eslint-disable-next-line no-console -- for improving development experience.
      console.warn(`Detected theme pickTransition function missing context theme access`)
    }
    return pickTrans(props?.theme?.transition || transitions)
  }
}

export { pickTransition, transitions }
export type { Transition }
