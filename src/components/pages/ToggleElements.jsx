import { useToggle } from '../hooks/useToggle';

export const ToggleElements = () => {
  const [isOn, toggleIsOn] = useToggle();

  return (
    <div className="app-event-listener">
      {isOn ?
        (<p>The light is on ... :)</p>) :
        (<p>Please turned off the lights ... :(</p>)}

      <button onClick={toggleIsOn}>Press Toggle</button>
    </div>
  )
}
