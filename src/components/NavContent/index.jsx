import { React } from 'react';

import { Link, BrowserRouter as Router } from 'react-router-dom';

import { NavStyle } from './styled';

export function NavContent() {
  return (
    <NavStyle>
      <Router>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/portifolio">Portifolio</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </Router>
    </NavStyle>
  );
}
