import { useState, useCallback } from 'react';

export const useCssVariable = (name) => {
  const [value, setState] = useState(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(name)
  )

  const setValue = useCallback(
    (newValue) => {
      setState(newValue);
      document.documentElement.style.setProperty(name, newValue);
    }, [name]
  );

  return [value, setValue];
}
