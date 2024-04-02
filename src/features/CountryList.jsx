import styled from 'styled-components';

import CountryItem from './CountryItem';
import { useCountries } from '../services/useCountries';
import { useSearchParams } from 'react-router-dom';
import { useCountriesListSize } from '../services/useCountriesListSize';
import { PAGE_SIZE } from '../utils/constants';

const StyledCountryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(4, 1fr);
  column-gap: 48px;
  margin-bottom: 16px;
  padding-bottom: 20px;
  color: var(--color-stone-300);
  font-size: var(--font-size-sm);
  font-weight: 600;
  border-bottom: 2px solid var(--color-stone-600);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 0;

  & > button {
    padding: 10px 14px;
    border: 2px solid var(--color-stone-600);
    border-radius: 8px;
  }

  & > button[type='next'] {
    margin-left: auto;
  }
`;

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
      <Header>
        <span>Flag</span>
        <span>Name</span>
        <span>Population</span>
        <span>Area(km²)</span>
        <span>Region</span>
        <span></span>
      </Header>
      <StyledCountryList>
        {countries.map(country => (
          <CountryItem key={country.altSpellings} country={country} />
        ))}
      </StyledCountryList>
      <Footer>
        {page > 1 && <button onClick={handlePrevPage}>&larr; Back</button>}
        {page < maxPageSize && (
          <button type="next" onClick={handleNextPage}>
            Next &rarr;
          </button>
        )}
      </Footer>
    </div>
  );
}

export default CountryList;
