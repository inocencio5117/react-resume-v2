import styled from "styled-components";

import { Pages } from "../../styles/Pages";
import { HeaderStyle } from "../../styles/HeaderStyle";

export const PortifolioContainer = styled.section`
  ${Pages}
  ${HeaderStyle()}
`;

export const Projs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.45rem;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
  }
`;
