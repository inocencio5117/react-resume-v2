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
        <h3>I&#x27;m a web frontend developer</h3>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
          ea, incidunt in aut ratione atque perspiciatis voluptatum, ipsam quis
          laudantium quisquam a blanditiis voluptatibus nobis sequi dolorem
          soluta rem.
        </div>
        <br />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          illum facilis dolores, cupiditate sit autem libero totam. Reiciendis
          eos exercitationem corrupti commodi asperiores quis ipsa, officiis
          optio explicabo laborum dolorum modi eligendi iste numquam beatae
          expedita laudantium ipsam quo nesciunt omnis odio? Excepturi autem,
          iusto laborum quasi magni magnam quas!
        </div>
      </IAm>

      <Knoledge>
        <h3>Knoledge</h3>

        <ul>
          {listItems("Linux")}
          {listItems("Sass")}
          {listItems("Git & Github")}
          {listItems("Webpack")}
          {listItems("Node.js")}
          {listItems("Express.js")}
        </ul>
      </Knoledge>
    </AboutContainer>
  );
}
