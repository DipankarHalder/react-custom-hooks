import { useLocalStorage } from '../hooks/useLocalStorage';

export const LocalStorage = () => {
  const [color, setColor] = useLocalStorage('blue', 'color');

  const setLocalValue = () => {
    setColor(color === "blue" ? "green" : "blue");
  }

  return (
    <div className="app-event-listener">
      <span 
        className="app-span-btn"
        style={{ background: `${color}`}} 
        onClick={setLocalValue}>Initial state color - {color}
      </span>
    </div>
  )
}
