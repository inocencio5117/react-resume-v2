import { React } from "react";

import { Projects } from "../../components/Projects/index";

import { PortifolioContainer, Projs } from "./styled";

export function Portifolio() {
  return (
    <PortifolioContainer>
      <h3>Portifólio</h3>

      <Projs>
        <Projects
          projName="TODO API"
          link="https://github.com/inocencio5117/ignite_todo_api"
          description="API de TODO em Node.js"
        />
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
          projName="Algoritmos e Estruturas de Dados"
          link="https://github.com/inocencio5117/data_structures_and_algorithms"
          description="Estudos sobre algoritmos feitos em Python"
        />
        <Projects
          projName="API de Agenda"
          link="https://github.com/inocencio5117/agenda_api_flask"
          description="Uma API para agenda feita em Flask"
        />
        <Projects
          projName="React Resume"
          link="https://github.com/inocencio5117/react-resume-v2"
          description="Currículo online feito em React"
        />
      </Projs>
    </PortifolioContainer>
  );
}
