import { useHasMounted } from '../hooks/useHasMounted';

export const HasMounted = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }
  
  return (
    <div className="app-event-listener">
      <p>Client only!</p>
    </div>
  )
}
