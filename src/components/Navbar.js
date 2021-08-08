import React from "react";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { GrTextAlignRight } from "react-icons/gr";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
`;

const NavLink = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;
const Logo = styled(Link)`
  ${NavLink};
  font-style: italic;
`;
const MenuBars = styled(GrTextAlignRight)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  // width: 500px;
  justify-content: space-between;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink};
`;

const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">VIBROFLOW</Logo>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <MenuBars>
        <GrTextAlignRight />
      </MenuBars>
      <NavButton>
        <Button to="/contactus" big primary>
          Contact Us
        </Button>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
