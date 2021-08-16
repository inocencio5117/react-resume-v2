import styled from 'styled-components';

import { Pages } from '../../styles/Pages';
import { HeaderStyle } from '../../styles/HeaderStyle';

import { primaryPurple } from '../../styles/Colors';

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

        outline: none;

        transition: all 350ms ease-in-out;
      }

      input:focus, textarea:focus {
        border: 2px solid ${primaryPurple};
        outline: 1px solid ${primaryPurple};
        background-color: rgba(189, 195, 199, 1);
      }
    }
`;
