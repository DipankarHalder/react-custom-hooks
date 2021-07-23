import { useCallback, useRef, useEffect } from 'react';

export const useClickOutside = (cb, dep) => {
  const ref = useRef(null);
  const callback = useCallback(cb, dep);

  useEffect(() => {
    const listener = (e) => {
      if(!ref.current.contains(e.target)){
        callback(e);
      }
    }
    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, [ref]);

  return ref;
}
