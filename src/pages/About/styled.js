import styled from "styled-components";

import { Pages } from "../../styles/Pages";
import { HeaderStyle } from "../../styles/HeaderStyle";
import { primaryViolet } from "../../styles/Colors";

export const AboutContainer = styled.section`
  ${Pages}
`;

export const IAm = styled.section`
  ${HeaderStyle()}

  > div {
    padding: 0rem 2rem;
  }
`;

export const Knoledge = styled.div`
  ${HeaderStyle()}

  .knoledge-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    ul {
      .check {
        margin-right: 0.5rem;
        color: ${primaryViolet};

        font-size: 1.325rem;
      }

      > li {
        display: flex;
        align-items: center;

        margin-bottom: 0.25rem;
      }
    }
  }
`;
