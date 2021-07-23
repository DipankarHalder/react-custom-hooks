import { useState, useCallback } from 'react';

export const useStatePair = (initial) => {
  const [[prev, current], setPair] = useState([undefined, initial]);
  const setValue = useCallback(
    next => setPair([current, next]),
    [current]
  );
  return [prev, current, setValue];
}
