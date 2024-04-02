import { useQuery } from '@tanstack/react-query';
import { getCountries, getListSize } from '../api/apiCountry';
import { useSearchParams } from 'react-router-dom';

export function useCountries() {
  const [searchParams] = useSearchParams();

  // SORT
  const sort = searchParams.get('sort') || 'population';

  // FILTER
  const regionRaw = searchParams.get('region') || [];
  const regionAll = regionRaw.length ? regionRaw.split(',') : [];

  // STATUS
  const statusRaw = searchParams.get('status') || [];
  const statusAll = statusRaw.length ? statusRaw.split(',') : [];

  // SEARCH
  const query = searchParams.get('search')?.toLowerCase() || '';

  // PAGINATION
  const page = searchParams.get('page') ? +searchParams.get('page') : 1;

  const {
    data: countries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['countries', sort, regionAll, statusAll, query, page],
    queryFn: () => getCountries({ sort, regionAll, statusAll, query, page }),
  });

  return { countries, isLoading };
}
