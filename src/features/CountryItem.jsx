import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCountryItem = styled.li`
  display: grid;
  grid-template-columns: 50px repeat(4, 1fr);
  align-items: center;
  column-gap: 48px;
`;

const Flag = styled.img`
  width: 50px;
  height: 38px;
  border-radius: 4px;
  object-fit: cover;
`;

const CountryName = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 500;
`;

function CountryItem({ country }) {
  // console.log(country);
  const { name, flags, population, area, region } = country;

  const { common } = name;
  const { svg } = flags;

  return (
    <StyledCountryItem>
      <Link to={`/${common.toLowerCase()}`}>
        <Flag src={svg} />
      </Link>
      <Link to={`/${common.toLowerCase()}`}>
        <CountryName>{common}</CountryName>
      </Link>
      <span>{population.toLocaleString()}</span>
      <span>{area.toLocaleString()}</span>
      <span>{region}</span>
    </StyledCountryItem>
  );
}

export default CountryItem;
