/* eslint-disable comma-dangle */
import { React } from "react";

import { ResumeContainer, Bio, AfterContent } from "./styled";

export function Resume() {
  return (
    <>
      <ResumeContainer>
        <Bio>
          <h3>Bio</h3>

          <div>
            Graduando em Analise e Desenvolvimento de Sisitemas e estudande de
            desenvolvimento backend, usando as linguagens Typescript e
            Javascript.
          </div>
          <br />
        </Bio>
      </ResumeContainer>

      <AfterContent>
        <h3>Experiência Profissional</h3>

        <div>
          <div className="wrapper">
            <span>2018 - 2021</span>

            <span>
              <h4>Soldado Fuzileiro Naval</h4>
              <span>Marinha do Brasil</span>
              <br />
              <span>Sorocaba - SP</span>
            </span>
          </div>
          <ul>
            <li>Atuava diretamente na guarda e proteção das instalações</li>
            <li>
              Atuava como auxiliar de descontaminação na companhina de defesa
              NBQR
            </li>
            <li>
              Possuia Aptidão Média para a Carreira excelente durante todo o
              tempo servido
            </li>
          </ul>
        </div>
      </AfterContent>

      <AfterContent>
        <h3>Formação Acadêmica</h3>

        <div>
          <div className="wrapper">
            <span>2021 - Presente</span>

            <span>
              <h4>Tecnologia em Análise e Desenvolvimento de Sistemas</h4>
              <span>Unicesumar</span>
              <br />
              <span>São Paulo - SP</span>
            </span>
          </div>
          <ul>
            <li>Cursando o 3° semestre</li>
          </ul>
        </div>
      </AfterContent>
    </>
  );
}
