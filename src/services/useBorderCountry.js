import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBorderCountry } from '../api/apiCountry';

export function useBorderCountry() {
  const params = useParams();

  const { data: borderCountries, isLoading } = useQuery({
    queryKey: ['countries_borders'],
    queryFn: () => getBorderCountry(params.country),
  });

  return { borderCountries, isLoading };
}
