import { useTickerTape } from '../hooks/useTickerTape';

export const TickerTape = () => {
  const news = useTickerTape(" JavaScript" + " TypeScript" + " React" + " Angular" + " Vue" + " Ember", 100);
  return <div>{news.join('')}</div>
}
