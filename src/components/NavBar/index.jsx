import { React, useState, useEffect } from 'react';

import { BiMenu } from 'react-icons/bi';

import { Nav } from './styled';

export function NavBar() {
  // Getting width from window
  const [width, setWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return (() => {
      window.removeEventListener('resize', handleResize);
    });
  });

  return (
    <>
      {width < 756
      && (
      <Nav>
        <h2>Menu</h2>
        <BiMenu className="hamburguer" />
      </Nav>
      )}
    </>
  );
}
