import styled from "styled-components";

import { secondaryGrey, primaryViolet } from "../../styles/Colors";

export const Aside = styled.aside`
  background: ${secondaryGrey};

  margin: 0rem 1.75rem 2rem 0rem;

  width: 26rem;
  min-height: 43.75rem;

  h1 {
    padding: 1rem 0rem 0rem 1rem;
  }

  h2 {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  h2::before,
  h2::after {
    content: "";
    background-color: rgba(191, 191, 191, 0.3);
    width: 100%;
    height: 1px;
    margin: 1rem 0rem;
  }

  .img-container {
    height: 16rem;
    width: 100%;

    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 100%;
      width: auto;
    }
  }

  @media (max-width: 1160px) {
    margin-right: 0rem;
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin-right: 0rem;
    width: 80vw;
  }
`;

export const InfoContainer = styled.div`
  padding: 1rem;

  > span {
    display: flex;
    justify-content: space-between;

    padding: 0.75rem 0rem;
  }
`;

export const SocialProfile = styled.div`
  > div {
    display: flex;
    justify-content: space-evenly;
  }

  > div > * {
    cursor: pointer;

    font-size: 1.5rem;
    margin: 0.75rem;

    transition: all 300ms ease;

    &:hover {
      color: ${primaryViolet};
    }
  }
`;

export const Attachments = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0rem 0rem 1.5rem 0rem;

  > div {
    align-self: center;
    text-align: center;

    display: flex;
    justify-content: space-between;

    background-color: grey;

    width: 90%;
    border-radius: 5px;

    padding: 0.75rem 0.5rem;
    margin-top: 0.75rem;

    span + span {
      cursor: pointer;
    }
  }
`;

// export const Skills = styled.div`
//   display: flex;
//   flex-direction: column;

//   margin: 1rem 0rem;

//   > div {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     color: ${primaryViolet};
//     width: 100%;

//     padding: 1rem;
//   }
// `;
