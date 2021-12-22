import { React } from "react";
import { PropTypes } from "prop-types";

import { FaArrowRight } from "react-icons/fa";

import { ProjectsContainer } from "./styled";

export function Projects({ projName, link, description }) {
  const desc = description || "";

  return (
    <ProjectsContainer>
      <span>
        <div>
          <h4>{projName}</h4>
          <p>{desc}</p>
        </div>
        <a href={link} target="_blank" rel="noreferrer noopener">
          Acesse o Projeto
          <FaArrowRight className="arrow" />
        </a>
      </span>
    </ProjectsContainer>
  );
}

Projects.propTypes = {
  projName: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
};

Projects.defaultProps = { description: "" };
