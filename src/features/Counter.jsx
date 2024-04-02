import styled from 'styled-components';

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 0;
  font-size: var(--font-size-md);
  border-radius: 12px;
  background-color: var(--color-stone-600);

  & > p {
    padding: 9px 20px;
  }

  & > p:nth-child(1) {
    border-right: 1px solid var(--color-stone-800);
  }
`;

function Counter({ label, value }) {
  return (
    <StyledCounter>
      <p>{label}</p>
      <p>{value.toLocaleString()}</p>
    </StyledCounter>
  );
}

export default Counter;
