import { useEffect, useRef } from "react"

export const useDimensions = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 })
  useEffect(() => {
    if (ref.current === null) return

    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  }, [])

  return dimensions.current
}
