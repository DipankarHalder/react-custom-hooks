import { useState, useEffect, useRef, useCallback } from 'react';

export const useDraggable = (onMove) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    if(offset) {
      const move = (e) => onMove(
        [e.clientX - offset[0], e.clientY - offset[1]]
      );
      const up = () => setOffset(null);
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
      return () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };
    }
  }, [onMove, offset]);

  const onMouseDown = useCallback((e) => {
    const {x, y} = ref.current.getBoundingClientRect() || {};
    setOffset([e.clientX - x, e.clientY - y]);
  }, []);

  return [ref, onMouseDown];
}
