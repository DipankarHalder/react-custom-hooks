import { useState, useCallback } from 'react';

export const useFilterState = (filter, initalState) => {
  const [value, setValue] = useState(initalState);
  const setFilter = useCallback(
    next => filter(next) && setValue(next), 
    [filter]
  )
  return [value, setFilter];
}
