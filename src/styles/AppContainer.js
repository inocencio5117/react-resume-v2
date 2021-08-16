import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;

  padding: 6.25rem 0rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding: 0px;
  }
`;
