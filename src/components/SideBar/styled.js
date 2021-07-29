import styled from 'styled-components';

export const Aside = styled.aside`
  background: red;

  margin-right: 1.75rem;

  width: 26rem;
  min-height: 43.75rem;

  h2 {
    padding: 1rem 0rem 0rem 1rem;
  }

  > img {
    width: 100%;
    height: 13.125rem;
  }
`;

export const InfoContainer = styled.div`
  background-color: darkcyan;

  padding: 1rem;

  > span {
    display: flex;
    justify-content: space-between;

    padding: .75rem 0rem;
  }
`;

export const SocialProfile = styled.div`
  background-color: green;

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

    color: black;
    width: 100%;

    padding: 1rem;
  }
`;
