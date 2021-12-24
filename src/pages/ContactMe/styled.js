import styled from "styled-components";

import { Pages } from "../../styles/Pages";
import { HeaderStyle } from "../../styles/HeaderStyle";

import { primaryPurple } from "../../styles/Colors";

export const ContactContainer = styled.section`
  ${Pages}
  ${HeaderStyle()}

    > form {
    display: flex;
    flex-direction: column;

    padding: 0rem 1rem;

    .error {
      color: red;
      margin: 0.5rem 0.5rem;
    }

    > input,
    textarea {
      width: 100%;
      margin: 0.5rem 0rem;
      padding: 0.5rem;

      outline: none;

      transition: all 350ms ease-in-out;
    }

    > button {
      background-color: ${primaryPurple};
      color: #fff;

      outline: none;
      border: none;

      height: 2rem;
      width: 15%;

      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 500;

      border-radius: 10px;
      cursor: pointer;

      transition: all 250ms ease-in-out;
    }

    > button:hover {
      color: #000;
      background-color: #fff;
    }

    input:focus,
    textarea:focus {
      border: 2px solid ${primaryPurple};
      outline: 1px solid ${primaryPurple};
      background-color: rgba(189, 195, 199, 1);
    }

    @media (max-width: 1024px) {
      > button {
        align-self: center;

        width: 80%;
        height: 2.25rem;
      }
    }
  }
`;
