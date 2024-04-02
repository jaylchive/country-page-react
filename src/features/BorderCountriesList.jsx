import styled from 'styled-components';
import { useBorderCountry } from '../services/useBorderCountry';
import BorderCountryItem from './BorderCountryItem';

const StyledBorderCountriesList = styled.div`
  width: 100%;
  padding: 28px 22px;

  & > p {
    margin-bottom: 20px;
    grid-column: 1 / -1;
    color: var(--color-stone-300);
    font-size: var(--font-size-md);
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
`;

function BorderCountriesList() {
  const { borderCountries, isLoading } = useBorderCountry();

  if (isLoading) return null;

  return (
    <StyledBorderCountriesList>
      <p>Neighbouring Countries</p>
      <Ul>
        {borderCountries?.map(country => (
          <BorderCountryItem key={country.name.common} country={country} />
        ))}
      </Ul>
    </StyledBorderCountriesList>
  );
}

export default BorderCountriesList;
