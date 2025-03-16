import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.onmouseenter = () => setHovered(true)
    element.onmouseleave = () => setHovered(false)

    return () => {
      element.onmouseenter = null
      element.onmouseleave = null
    }
  }, [])

  return {
    hovered,
    ref,
  }
}
