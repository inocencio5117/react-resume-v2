import styled from "styled-components";

import { primaryViolet, secondaryGrey } from "../../styles/Colors";

export const ProjectsContainer = styled.div`
  padding: 1rem;

  > span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 14rem;
    height: 9.5rem;
    background-color: ${secondaryGrey};

    padding: 1rem;

    border-radius: inherit;

    transition: all 250ms ease-in-out;

    div > p {
      font-size: 0.925rem;
      margin: 0.5rem 0.25rem;
    }

    a {
      display: flex;
      align-items: center;

      text-decoration: none;
      color: ${primaryViolet};

      font-size: 1.175rem;
      font-weight: 500;

      cursor: pointer;

      .arrow {
        margin-left: 0.7rem;
      }

      &:hover {
        color: black;
      }

      transition: all 250ms ease-in-out;
    }
  }
`;
