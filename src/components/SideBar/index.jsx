import { React } from 'react';

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { GrGoogle, GrDocumentDownload } from 'react-icons/gr';
import { CreateCircularProgress } from '../CreateCircularProgress';

import ProfilePic from '../../assets/images/black_man.jpg';

import {
  Aside, InfoContainer, SocialProfile, Attachments, Skills,
} from './styled';

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
      <h2>Professional Details</h2>

      <img src={ProfilePic} alt="Black man in suit" />

      <InfoContainer>
        {info('Name', 'Vinicius')}
        {info('Age', '23 Years')}
        {info('Location', 'São Paulo, Brazil')}
        {info('Experience', '1 Year')}
        {info('Degree', '...')}
        {info('Carrer Level', 'Junior')}
        {info('Phone', '...')}
        {info('Email', 'vicnicius2009@gmail.com')}
      </InfoContainer>

      <SocialProfile>
        <h2>Social Profile</h2>

        <div>
          <FaFacebookF />
          <GrGoogle />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </SocialProfile>

      <Attachments>
        <h2>Attachments</h2>

        <div>
          <span>Curriculum Vitae</span>
          <span>
            <GrDocumentDownload />
          </span>
        </div>
      </Attachments>

      <Skills>
        <h2>Skills</h2>

        {progress('HTML', 95)}
        {progress('CSS', 85)}
        {progress('Javascript', 80)}
        {progress('Python', 75)}
        {progress('React.js', 60)}
      </Skills>
    </Aside>
  );
}
