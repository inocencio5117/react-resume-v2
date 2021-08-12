import styled from 'styled-components';

import { Pages } from '../../styles/Pages';
import { HeaderStyle } from '../../styles/HeaderStyle';
import { primaryPurple } from '../../styles/Colors';

export const AboutContainer = styled.section`
  ${Pages}

`;

export const IAm = styled.p`
  ${HeaderStyle()}

  > div {
    padding: 0rem 2rem;
  }
`;

export const Knoledge = styled.div`
  ${HeaderStyle()}

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
