import { useFetch } from '../hooks/useFetch';
import { LoaderSnipper } from '../dependancy/LoaderSnipper';
import { ShowError } from '../dependancy/ShowError';

export const Fetch = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { loading, error, data } = useFetch(url);

  const loadPage = () => loading && <LoaderSnipper />;
  const loadError = () => error && <ShowError />;
  
  return (
    <div className="app-body-cover">
      {loadPage()}
      {loadError()}
      {data && (
        <ul>
          {data.map(item => 
            <li key={item.id}>
              <h4>{item.title}</h4>
            </li>
          )}
        </ul>
      )}
    </div>
  )
}
