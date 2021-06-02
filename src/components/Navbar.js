import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { theme } from "../theme";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log({ pathname });
  const title = () => {
    if (pathname === "/login") return "Login";
    if (pathname === "/") return "User List";
    if (pathname.includes("user")) return "User";
    return "Page not found";
  };
  return <NavbarContainer>{title()}</NavbarContainer>;
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: ${theme.colors.darkBackground};
  color: ${theme.colors.white};
  width: 100vw;
  height: ${theme.content.navbarSmall};
  font-size: ${theme.fontSize.title.small};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
