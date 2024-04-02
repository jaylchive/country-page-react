import styled from 'styled-components';

import CountryItem from './CountryItem';
import { useCountries } from '../services/useCountries';
import { useSearchParams } from 'react-router-dom';
import { useCountriesListSize } from '../services/useCountriesListSize';
import { PAGE_SIZE } from '../utils/constants';

import styles from './CountryList.module.css';

function CountryList() {
  const { countries, isLoading } = useCountries();
  const { listSize } = useCountriesListSize();
  const [searchParams, setSearchParams] = useSearchParams();

  const maxPageSize = Math.ceil(listSize / PAGE_SIZE);
  const page = searchParams.get('page') ? +searchParams.get('page') : 1;

  function handlePrevPage() {
    const nextPage = page - 1;

    searchParams.set('page', nextPage);
    setSearchParams(searchParams);
  }

  function handleNextPage() {
    const nextPage = page + 1;

    searchParams.set('page', nextPage);
    setSearchParams(searchParams);
  }

  if (isLoading || !countries) return null;

  return (
    <div>
      <header className={styles.header}>
        <span>Flag</span>
        <span>Name</span>
        <span>Population</span>
        <span>Area(km²)</span>
        <span>Region</span>
        <span></span>
      </header>
      <ul className={styles.list}>
        {countries.map(country => (
          <CountryItem key={country.altSpellings} country={country} />
        ))}
      </ul>
      <footer className={styles.footer}>
        {page > 1 && <button onClick={handlePrevPage}>&larr; Back</button>}
        {page < maxPageSize && (
          <button type="next" onClick={handleNextPage}>
            Next &rarr;
          </button>
        )}
      </footer>
    </div>
  );
}

export default CountryList;
