import styled from 'styled-components';

import { secondaryGrey, primaryPurple, textColor } from '../../styles/Colors';

export const NavStyle = styled.div`
  display: flex;
  align-items: center;

  height: 4.125rem;
  width: 100%;

  background-color: ${secondaryGrey};

  margin-bottom: 1.5rem;

  > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100%;

    cursor: pointer;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      font-size: 1.15rem;

      padding: 0rem 2.75rem;

      transition: all 450ms ease-in-out;

      > a {
        margin-left: .5rem;
        color: inherit;
      }

     &:hover {
       background-color: ${primaryPurple};
       color: ${textColor};
     }
    }
  }
`;
