import { React } from 'react';

import { Projects } from '../../components/Projects/index';

import { PortifolioContainer, Projs } from './styled';

export function Portifolio() {
  return (
    <PortifolioContainer>
      <h3>Portifolio</h3>

      <Projs>
        <Projects projName="Proj1" link="/" />
        <Projects projName="Proj1" link="/" />
        <Projects projName="Proj1" link="/" />
        <Projects projName="Proj1" link="/" />
        <Projects projName="Proj1" link="/" />
        <Projects projName="Proj1" link="/" />
      </Projs>
    </PortifolioContainer>
  );
}
