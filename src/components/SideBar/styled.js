import styled from 'styled-components';

import { secondaryGrey, primaryViolet } from '../../styles/Colors';

export const Aside = styled.aside`
  background: ${secondaryGrey};

  margin-right: 1.75rem;

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

  h2::before, h2::after {
    content: "";
    background-color: rgba(191, 191, 191, .3);
    width: 100%;
    height: 1px;
    margin: 1rem 0rem;
  }

  > img {
    width: 100%;
    height: 13.125rem;
    margin-top: 1rem;
  }
`;

export const InfoContainer = styled.div`
  padding: 1rem;

  > span {
    display: flex;
    justify-content: space-between;

    padding: .75rem 0rem;
  }
`;

export const SocialProfile = styled.div`
  > div {
    display: flex;
    justify-content: space-evenly;
  }

  > div > * {
    cursor: pointer;

    font-size: 1.375rem;
    margin: 1rem;

    transition: all 300ms ease;

    &:hover {
      color: #000;
    }
  }
`;

export const Attachments = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    align-self: center;
    text-align: center;

    display: flex;
    justify-content: space-between;

    background-color: grey;

    width: 90%;
    border-radius: 5px;

    padding: .75rem .5rem;
    margin-top: 1rem;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${primaryViolet};
    width: 100%;

    padding: 1rem;
  }
`;
