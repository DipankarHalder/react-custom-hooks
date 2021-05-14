import { useState, useRef } from 'react';
import { useEventListener } from '../hooks/useEventListener';

export const EventListener = () => {
  let [show, setShow] = useState(false);
  const dialogRef = useRef();

  useEventListener('mousedown', 
    event => {
      setShow(!show);
      if (event.defaultPrevented) { return; }
    },
    dialogRef.current
  );

  return (
    <div className="app-event-listener">
      {show ? 
        (<button ref={dialogRef}>Bye, Good Night!</button>) : 
        (<button ref={dialogRef}>Hello, Good Morning!</button>)}
    </div>
  );
}
