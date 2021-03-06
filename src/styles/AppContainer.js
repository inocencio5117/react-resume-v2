import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;

  padding: 6.25rem 0rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 800px) {
    padding: 1.25rem 0rem;
  }
`;
