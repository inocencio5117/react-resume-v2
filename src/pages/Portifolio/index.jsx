import { React } from "react";

import { Projects } from "../../components/Projects/index";

import { PortifolioContainer, Projs } from "./styled";

export function Portifolio() {
  return (
    <PortifolioContainer>
      <h3>Portifólio</h3>

      <Projs>
        <Projects
          projName="Calculadora de Bases Numéricas"
          link="https://github.com/inocencio5117/Calculadora-bases-numericas"
          description="Calculadora de bases numéricas feito em Vannila Javascript"
        />
        <Projects
          projName="Tic Tac Toe"
          link="https://github.com/inocencio5117/Tic-Tac-Toe-in-Javascript"
          description="Tic Tac Toe em vannila Javascript"
        />
        <Projects
          projName="Jokenpo"
          link="https://github.com/inocencio5117/Jokenpo"
          description="Jokenpo feito em Python"
        />
        <Projects projName="Proj1" link="/" />
        <Projects projName="Proj1" link="/" />
        <Projects projName="Proj1" link="/" />
      </Projs>
    </PortifolioContainer>
  );
}
