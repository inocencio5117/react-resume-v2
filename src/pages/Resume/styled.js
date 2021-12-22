import styled from "styled-components";

import { Pages } from "../../styles/Pages";
import { HeaderStyle } from "../../styles/HeaderStyle";

export const ResumeContainer = styled.section`
  ${Pages}
`;

export const Bio = styled.section`
  ${HeaderStyle()}

  > div {
    padding: 0rem 2rem;
  }
`;

export const AfterContent = styled.section`
  ${Pages}
  ${HeaderStyle()}
  margin-top: 1.75rem;

  > div {
    display: flex;
    flex-direction: column;

    > div,
    > pre {
      margin-bottom: 1.75rem;
      font-family: "Roboto", sans-Serif;
    }

    width: 100%;

    .wrapper {
      display: flex;
      justify-content: space-between;
    }
    padding: 0rem 2rem;
  }

  > div + div {
    margin-top: 2rem;
  }
`;
