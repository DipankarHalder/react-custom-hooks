import { useState, useMemo } from 'react';
import { useDraggable } from '../hooks/useDraggable';

export const Draggable = () => {
  const [[x, y], setCoords] = useState([100, 100]);
  const style = useMemo(() => ({ position: 'absolute', top: `${y}px`, left: `${x}px`, cursor: 'pointer' }), [x, y]);
  const [ref, onMouseDown] = useDraggable(setCoords);

  return (
    <span 
      ref={ref}
      onMouseDown={onMouseDown}
      style={style}>
      Drag Me!
    </span>
  )
}
