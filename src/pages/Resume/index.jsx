import { React } from 'react';

import {
  ResumeContainer, Bio, AfterContent,
} from './styled';

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum illum facilis dolores,
cupiditate sit autem libero totam.
Reiciendis eos exercitationem corrupti commodi asperiores quis ipsa,
officiis optio explicabo laborum dolorum modi eligendi iste numquam beatae expedita
laudantium ipsam quo nesciunt omnis odio? Excepturi autem,
iusto laborum quasi magni magnam quas!`;

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

      <p>
        {text}
      </p>
    </div>
  );
}

export function Resume() {
  return (
    <>
      <ResumeContainer>
        <Bio>
          <h3>Bio &amp; Skills</h3>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis quam ea, incidunt in aut ratione atque perspiciatis voluptatum,
            ipsam quis laudantium quisquam a blanditiis voluptatibus nobis sequi dolorem soluta rem.
          </div>
          <br />
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum illum facilis dolores,
            cupiditate sit autem libero totam.
            Reiciendis eos exercitationem corrupti commodi asperiores quis ipsa,
            officiis optio explicabo laborum dolorum modi eligendi iste numquam beatae expedita
            laudantium ipsam quo nesciunt omnis odio? Excepturi autem,
            iusto laborum quasi magni magnam quas!
          </div>
        </Bio>

      </ResumeContainer>

      <AfterContent>
        <h3>Professional Experience</h3>

        {infoWrapper('Period', 'Job', 'Company', 'Location', 'Image', 'Alt', lorem)}

        {infoWrapper('Period', 'Job', 'Company', 'Location', 'Image', 'Alt', lorem)}
      </AfterContent>

      <AfterContent>
        <h3>Academic Backgorund</h3>

        {infoWrapper('Period', 'Job', 'Company', 'Location', 'Image', 'Alt', lorem)}

        {infoWrapper('Period', 'Job', 'Company', 'Location', 'Image', 'Alt', lorem)}
      </AfterContent>
    </>
  );
}
