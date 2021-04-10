import { Fragment, useRef } from 'react';
import useEventListener from '../hooks/useEventListener';

export default function EventListener({ show = false, onClose = () => null }) {
  const dialogRef = useRef();

  useEventListener(
    'mousedown',
    event => {
      console.log(event)
      if (event.defaultPrevented) { return; }
      if (!dialogRef?.current?.contains(event.target)) { onClose(); }
    },
    dialogRef.current
  );

  return (
    <Fragment>
      {show && (
        <div ref={dialogRef}>
          Helloooooooooooooooooooo!
        </div>
      )}
    </Fragment>
  );
}
