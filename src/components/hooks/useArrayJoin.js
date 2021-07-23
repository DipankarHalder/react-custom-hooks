import { useMemo } from 'react';

export const useArrayJoin = (arr, join) => {
  return useMemo(() => {
    return arr.reduce(
      (acc, next, key) => 
        acc === null ?
          [next] : 
          [...acc, join(key), next],
      null
    );
  }, [arr, join]);
}
