import { useArrayJoin } from '../hooks/useArrayJoin';

export const ArrayJoin = () => {
  const list = [
    <li>Hello</li>,
    <li>JavaScript</li>,
    <li>World</li>,
  ]

  const joined = useArrayJoin(
    list, (key) => <ul key={key}></ul>
  );

  return <div>{joined}</div>
}
