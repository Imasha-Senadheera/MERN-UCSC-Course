import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink href="#home">Home</NavLink></NavItem>
        <NavItem><NavLink href="#about">About</NavLink></NavItem>
        <NavItem><NavLink href="#services">Services</NavLink></NavItem>
        <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
