/* eslint-disable comma-dangle */
import { React } from "react";

import { ResumeContainer, Bio, AfterContent } from "./styled";

import { jobMarinha, universidade } from "../../assets/data/resumeInfo";

function infoWrapper(period, job, company, location, image, alt, text) {
  return (
    <div>
      <div className="wrapper">
        <span>{period}</span>

        <span>
          <h4>{job}</h4>
          <span>{company}</span>
          <br />
          <span>{location}</span>
        </span>

        {/* <img src={image} alt={alt} /> */}
        <span>
          {image}
          {alt}
        </span>
      </div>

      <pre>{text}</pre>
    </div>
  );
}

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

        {infoWrapper(
          "2018 - 2021",
          "Soldado Fuzileiro Naval",
          "Marinha do Brasil (Corpo de Fuziliros Navais)",
          "Sorocaba -SP",
          "Image",
          "Alt",
          jobMarinha.description
        )}
      </AfterContent>

      <AfterContent>
        <h3>Formação Acadêmica</h3>

        {infoWrapper(
          "2021 - 2023",
          "Tecnologia em Análise e Desenvolvimento de Sistemas",
          "UniCesumar",
          "São Paulo - SP",
          "Image",
          "Alt",
          universidade.description
        )}
      </AfterContent>
    </>
  );
}
