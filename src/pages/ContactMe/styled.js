import styled from 'styled-components';

import { Pages } from '../../styles/Pages';
import { HeaderStyle } from '../../styles/HeaderStyle';

export const ContactContainer = styled.section`
    ${Pages}
    ${HeaderStyle()}

    > form {
      display: flex;
      flex-direction: column;

      padding: 0rem 1rem;

      > input, textarea {
        width: 100%;
        margin-bottom: .5rem;
        padding: .5rem;
      }
    }
`;
