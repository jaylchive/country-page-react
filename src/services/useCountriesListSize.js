import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getListSize } from '../api/apiCountry';

export function useCountriesListSize() {
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
    data: listSize,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['countries_size', sort, regionAll, statusAll, query, page],
    query,
    queryFn: () => getListSize({ sort, regionAll, statusAll, query, page }),
  });

  return { listSize, isLoading };
}
