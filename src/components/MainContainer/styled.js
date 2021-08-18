import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;


  padding: 0rem 25rem;
  max-width: 125rem;

  @media (max-width: 1230px) {
    align-items: center;
    padding: 1rem;
  }

  @media (max-width: 768px) {

    padding: 1rem 1rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 1160px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 80vw;
  }
`;
