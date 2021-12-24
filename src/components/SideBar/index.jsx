/* eslint-disable object-curly-newline */
import { React } from "react";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";

import ProfilePic from "../../assets/images/fn_inocencio.jpg";

import { Aside, InfoContainer, SocialProfile, Attachments } from "./styled";

function info(bold, normal) {
  return (
    <span>
      <b>{bold}</b>
      <p>{normal}</p>
    </span>
  );
}

export function SideBar() {
  return (
    <Aside>
      <h1>Perfil Pessoal</h1>

      <div className="img-container">
        <img src={ProfilePic} alt="Profile" />
      </div>

      <InfoContainer>
        {info("Nome", "Vinicius")}
        {info("Idade", "23 Anos")}
        {info("Endereço", "São Paulo - SP")}
        {info("Experiência", "1 ano")}
        {info("Escolaridade", "Superior Incompleto")}
        {info("Telefone", "(11) 9 8516-4113")}
        {info("Email", "vicnicius2009@gmail.com")}
      </InfoContainer>

      <SocialProfile>
        <h2>Redes Sociais</h2>

        <div>
          <a
            href="https://github.com/inocencio5117"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-inocencio/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </SocialProfile>

      <Attachments>
        <h2>Anexos</h2>

        <div>
          <span>Curriculum Vitae</span>
          <span>
            <a href="../assets/data/Vinicius-Inocencio-curriculum.pdf" download>
              <GrDocumentDownload />
            </a>
          </span>
        </div>
      </Attachments>
    </Aside>
  );
}
