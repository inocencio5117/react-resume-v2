import { React } from "react";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { CreateCircularProgress } from "../CreateCircularProgress";

import ProfilePic from "../../assets/images/fn_inocencio.jpg";

import {
  Aside,
  InfoContainer,
  SocialProfile,
  Attachments,
  Skills,
} from "./styled";

function info(bold, normal) {
  return (
    <span>
      <b>{bold}</b>
      <p>{normal}</p>
    </span>
  );
}

function progress(tech, percent) {
  return (
    <div className="progress">
      <span>{`${tech}:`}</span>
      <CreateCircularProgress value={percent} />
    </div>
  );
}

export function SideBar() {
  return (
    <Aside>
      <h1>Perfil Pessoal</h1>

      <img src={ProfilePic} alt="Profile" />

      <InfoContainer>
        {info("Nome", "Vinicius")}
        {info("Idade", "23 Anos")}
        {info("Endereço", "São Paulo - SP")}
        {info("Experiência", "1 Year")}
        {info("Escolaridade", "...")}
        {info("Nível de Carreira", "Junior")}
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
          <a
            href="https://www.instagram.com/fn_inocencio/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram />
          </a>
        </div>
      </SocialProfile>

      <Attachments>
        <h2>Anexos</h2>

        <div>
          <span>Curriculum Vitae</span>
          <span>
            <GrDocumentDownload />
          </span>
        </div>
      </Attachments>

      <Skills>
        <h2>Habilidades</h2>

        {progress("HTML", 90)}
        {progress("CSS", 80)}
        {progress("Javascript", 80)}
        {progress("Python", 60)}
        {progress("React.js", 65)}
      </Skills>
    </Aside>
  );
}
