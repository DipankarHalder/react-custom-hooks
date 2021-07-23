import { useState, useCallback } from 'react';

export const useStateCount = (initialState) => {
  const [[count, value], setState] = useState([0, initialState]);
  const setValue = useCallback(
    (next) => setState([count + 1, next]),
    [count]
  );
  return [count, value, setValue];
}
