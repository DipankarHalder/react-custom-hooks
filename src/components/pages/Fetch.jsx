import useFetch from '../hooks/useFetch';

export default function Fetch() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { loading, error, data } = useFetch(url);

  if(loading) return 'Loading...';
  if(error) return 'Something went wrong!';

  return (
    <div>
      <ul>
        {JSON.stringify(data)}
      </ul>
    </div>
  )
}
