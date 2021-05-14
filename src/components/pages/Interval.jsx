import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

export const Interval = () => {
  const [status, setStatus] = useState('idle');
  const [timeElapsed, setTimeElapsed] = useState(0);

  useInterval(() => {
      setTimeElapsed((timeElapsed) => timeElapsed + 1);
    }, status === 'running' ? 1000 : null
  );

  const isToggle = () => {
    setTimeElapsed(0);
    setStatus((status) => status === 'running' ? 'idle' : 'running');
  };

  return (
    <div className="app-event-listener">
      <p>Time Elapsed: {timeElapsed} second(s)</p>
      <button onClick={isToggle}>{status === 'running' ? 'Stop' : 'Start'}</button>
    </div>
  )
}
