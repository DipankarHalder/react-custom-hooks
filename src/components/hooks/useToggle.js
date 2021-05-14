import { useState, useCallback } from 'react';

export const useToggle = (initialValue = false) => {
  const [isTrue, setIsTrue] = useState(initialValue);

  const toggleItem = useCallback(() => {
    setIsTrue(item => !item)
  }, []);

  return [isTrue, toggleItem];
}
