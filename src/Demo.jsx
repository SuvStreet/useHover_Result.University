import { useHover } from './hooks/useHover'

import './App.css'

export function Demo() {
  const { hovered, ref } = useHover()

  return (
    <div ref={ref} className='hovered'>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  )
}
