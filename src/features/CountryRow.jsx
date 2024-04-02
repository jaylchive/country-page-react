import styled from 'styled-components';

const StyledCountryRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
  font-size: var(--font-size-md);
  border-bottom: 1px solid var(--color-stone-600);

  & > p:nth-child(1) {
    color: var(--color-stone-300);
  }
`;

function CountryRow({ category, value }) {
  return (
    <StyledCountryRow>
      <p>{category}</p>
      <p>{value}</p>
    </StyledCountryRow>
  );
}

export default CountryRow;
