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

    @media (max-width: 768px) {
      flex-direction: column;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      font-size: 1.15rem;

      padding: 0rem 2.75rem;

      transition: all 450ms ease-in-out;

      @media (max-width: 768px) {
        margin-bottom: .25rem;
      }

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

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {

    &.open {
      display: flex;
      background-color: transparent;
      margin: 1.5rem 0rem 2.75rem 0rem;
    }

    &.closed {
      display: none;
    }
  }
`;
