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
          <Link to="/">
            <CgProfile />
            About
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <CgReadme />
            Resume
          </Link>
        </li>
        <li>
          <Link to="/portifolio">
            <BsCodeSlash />
            Portifolio
          </Link>
        </li>
        <li>
          <Link to="/contactme">
            <TiContacts />
            Contact Me
          </Link>
        </li>
      </ul>
    </NavStyle>
  );
}
