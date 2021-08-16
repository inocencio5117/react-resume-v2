import { secondaryGrey } from './Colors';

export const Pages = `
  background-color: ${secondaryGrey};

  width: 52.5rem;
  height: auto;

  padding-bottom: 2rem;

  @media (max-width: 1024px) {
    width: 45rem;
  }
  @media (max-width: 768px) {
    width: 21.25rem;
  }
`;
