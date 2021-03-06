import styled from "styled-components";

import { secondaryGrey, primaryViolet } from "../../styles/Colors";

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
        margin-bottom: 0.25rem;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        color: inherit;
        cursor: pointer;

        &:focus {
          color: black;
        }

        svg {
          margin-right: 0.5rem;
        }

        &:hover {
          color: ${primaryViolet};
        }
      }
    }
  }

  @media (max-width: 1024px) {
    width: 80vw;

    ul > li {
      padding: 0rem 1rem;
    }
  }

  @media (max-width: 788px) {
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
