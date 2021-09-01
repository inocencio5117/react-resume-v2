import { React } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { CgProfile, CgReadme } from 'react-icons/cg';
import { BsCodeSlash } from 'react-icons/bs';
import { TiContacts } from 'react-icons/ti';

import { NavStyle } from './styled';

export function NavContent() {
  const toggler = useSelector((state) => state.toggler);

  return (
    <NavStyle className={toggler ? 'open' : 'closed'}>
      <ul>
        <li>
          <CgProfile />
          <Link to="/">About</Link>
        </li>
        <li>
          <CgReadme />
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <BsCodeSlash />
          <Link to="/portifolio">Portifolio</Link>
        </li>
        <li>
          <TiContacts />
          <Link to="/contactme">Contact Me</Link>
        </li>
      </ul>
    </NavStyle>
  );
}
