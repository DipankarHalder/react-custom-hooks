import { useState, useEffect } from 'react';

export const useTickerTape = (values, speed) => {
  const [tape, setTape] = useState([...values]);

  useEffect(() => {
    const id = setTimeout(() => {
      const first = tape.shift();
      setTape([...tape, first]);
    }, speed);
    return () => clearTimeout(id);
  }, [tape, speed]);

  return tape;
}
