import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCountry } from '../api/apiCountry';

export function useCountry() {
  const params = useParams();

  const { data: country, isLoading } = useQuery({
    queryKey: ['country'],
    queryFn: () => getCountry(params.country),
  });

  return { country, isLoading };
}
