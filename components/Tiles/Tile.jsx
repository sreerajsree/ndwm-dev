import { cloneElement, useContext, useRef } from 'react'
import { TileContext } from './TileContext'


export const Tile = ({ page, children }) => {
  const { currentPage, numOfPages } = useContext(TileContext)
  const progress = Math.max(0, currentPage - page)

  const refContainer = useRef(null)

  let opacity = Math.min(1, Math.max(0, progress * 4))

  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4)
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{ opacity, pointerEvents: progress >= 0 || progress >= 1 ? 'none' : undefined }}
    >
      {cloneElement(children, {
        progress: progress,
        opacity: opacity,
      })}
    </div>
  )
}
