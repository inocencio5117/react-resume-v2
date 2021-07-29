import { React } from 'react';

import { BiMenu } from 'react-icons/bi';

import { Nav } from './styled';

export function NavBar() {
  return (
    <Nav>
      <h2>RESUME</h2>
      <BiMenu className="hamburguer" />
    </Nav>
  );
}
