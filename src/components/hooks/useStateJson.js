import { useState, useCallback, useMemo } from 'react';

export const useStateJson = (initalState) => {
  const [json, setState] = useState(
    JSON.stringify(initalState ?? '')
  )
  const value = useMemo(() => JSON.parse(json), [json]);
  const setValue = useCallback(
    (next) => setState(JSON.stringify(next ?? '')),
    []
  );
  return [value, setValue];
}
