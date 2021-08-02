import styled from 'styled-components';

import { Pages } from '../../styles/Pages';
import { primaryPurple } from '../../styles/Colors';

function headerStyle() {
  return (
    `
    h3 {
      padding: 1.25rem 0rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    > h3::after {
      content: "";
      background-color: rgba(191, 191, 191, .3);
      width: 100%;
      height: 1px;
      margin: 1rem 0rem;
    }`
  );
}

export const AboutContainer = styled.section`
  ${Pages}

`;

export const IAm = styled.p`
  ${headerStyle()}

  > div {
    padding: 0rem 2rem;
  }
`;

export const Knoledge = styled.div`
  ${headerStyle()}

  ul {
    padding-left: 2rem;

    .check {
      margin-right: 1rem;
      color: ${primaryPurple};

      font-size: 1.325rem;
    }

    > li {
      display: flex;
      align-items: center;

    }
  }
`;
