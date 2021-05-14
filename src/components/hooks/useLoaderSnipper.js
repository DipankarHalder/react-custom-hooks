import { useState } from 'react';
import { LoaderSnipper } from '../dependancy/LoaderSnipper';

export const useLoaderSnipper = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading && <LoaderSnipper />, 
    () => setLoading(true), 
    () => setLoading(false)
  ];
}
