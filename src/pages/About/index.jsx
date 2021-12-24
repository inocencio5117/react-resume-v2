import { React } from "react";

import { BsCheck } from "react-icons/bs";

import { AboutContainer, IAm, Knoledge } from "./styled";

function listItems(item) {
  return (
    <li>
      <BsCheck className="check" />
      {item}
    </li>
  );
}

export function About() {
  return (
    <AboutContainer>
      <IAm>
        <h3>Sobre Mim</h3>

        <div>
          Durante 4 anos servi ao Corpo de Fuzileiros Navais, até que tomei a
          decisão de tomar novos rumos e me recolocar. Nesse processo me
          apaixonei por programação e, desde então, mergulhei nos estudos sobre
          a área.
        </div>
        <br />
        <div>
          Hoje tenho foco no nicho de desenvolvimento backend, na stack
          JavaScript/Typescript, usando Node.js e Express.js. Tenho também
          conhecimentos em Python, HTML e CSS. Gosto muito de explorar e
          aprender coisas novas, e pensando em compreender os processos de baixo
          nível do computador tenho esudado C e Rust.
        </div>
      </IAm>

      <Knoledge>
        <h3>Habilidades</h3>

        <div className="knoledge-container">
          <ul>
            {/* {listItems("Linux")} */}
            {listItems("Sass")}
            {listItems("Git & Github")}
            {listItems("Node.js")}
            {listItems("Express.js")}
          </ul>

          <ul>
            {listItems("React.js")}
            {listItems("Python")}
            {listItems("Javascript")}
            {listItems("Typescript")}
            {/* {listItems("Node.js")} */}
            {/* {listItems("Express.js")} */}
          </ul>
        </div>
      </Knoledge>
    </AboutContainer>
  );
}
