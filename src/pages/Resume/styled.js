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

    width: 100%;

    padding: 0rem 2rem;

    .wrapper {
      display: flex;
      justify-content: space-evenly;

      margin-bottom: 1.5rem;

      @media (max-width: 525px) {
        flex-direction: column;
        align-items: center;

        span {
          margin-bottom: 1.25rem;
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      padding-left: 2rem;

      li {
        list-style: disc;
      }
    }
  }

  > div + div {
    margin-top: 2rem;
  }
`;
