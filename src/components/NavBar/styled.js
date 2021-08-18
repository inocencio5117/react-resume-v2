import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.25rem;
  margin-bottom: 1.25rem;

  width: 21rem;
  height: auto;

  @media (max-width: 756px) {
      width: 80vw;
    }

  .hamburguer {
    height: 1.75rem;
    width: 1.75rem;

    cursor: pointer;
  }
`;
