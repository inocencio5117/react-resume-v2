import styled from 'styled-components';

import { primaryViolet, secondaryGrey } from '../../styles/Colors';

export const ProjectsContainer = styled.div`
  padding: 1rem;

  > span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: auto;
    height: auto;
    background-color: ${secondaryGrey};

    padding: 1rem;
    margin: .5rem;

    border-radius: inherit;

    transition: all 250ms ease-in-out;

    a {
      display: flex;
      align-items: center;

      text-decoration: none;
      color: ${primaryViolet};

      font-size: 1.175rem;
      font-weight: 500;

      cursor: pointer;

      .arrow {
        margin-left: .7rem;
    }
  }

  &:hover {
      transform: scale(1.1);
    }
  }
`;
