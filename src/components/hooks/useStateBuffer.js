import { useState, useCallback } from 'react';

export const useStateBuffer = (size, initialState) => {
  const [ values, setState ] = useState([initialState]);
  const setValue = useCallback(
    (next) => setState(
      [...values, next].slice(0, size)
    ),
    [values]
  );
  return [values, setValue];
}
