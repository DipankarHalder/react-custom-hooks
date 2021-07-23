import { useState, useEffect, useCallback, useRef } from 'react';

export const useStateDebounce = (ms, initialState) => {
  const [state, setState] = useState(initialState);
  const ref = useRef(0);

  const setValue = useCallback(value => {
    window.clearTimeout(ref.current);
    ref.current = window.setTimeout(() => setState(value), ms);
  }, [ms]);

  useEffect(() => () => window.clearTimeout(ref.current));
  return [state, setValue];
}
