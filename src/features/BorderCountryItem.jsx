import styled from 'styled-components';

const StyledBorderCountryItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > p {
    font-size: var(--font-size-sm);
  }
`;

const Flag = styled.img`
  width: 80px;
  height: 60px;
  display: block;
  object-fit: cover;
  border-radius: 8px;
`;

function BorderCountryItem({ country }) {
  const { flags, name } = country;

  return (
    <StyledBorderCountryItem>
      <Flag src={flags.svg} />
      <p>{name.common}</p>
    </StyledBorderCountryItem>
  );
}

export default BorderCountryItem;
