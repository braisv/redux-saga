import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import { theme } from "../theme";
import { ReactComponent as LogoutIcon } from "../assets/icons/logout.svg";
import { logOut } from "../services/authService";

const Navbar = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const title = () => {
    if (pathname === "/login") return "Login";
    if (pathname === "/") return "User List";
    if (pathname.includes("user")) return "User";
    return "Page not found";
  };
  return (
    <NavbarContainer>
      {title().toUpperCase()}
      <Logout onClick={() => logOut(history)} />
    </NavbarContainer>
  );
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

  @media (min-width: ${theme.breakpoints.medium}) {
    height: ${theme.content.navbarMedium};
    font-size: ${theme.fontSize.title.medium};
  }
  
  @media (min-width: ${theme.breakpoints.big}) {
    height: ${theme.content.navbarBig};
    font-size: ${theme.fontSize.title.big};
  }
`;

const Logout = styled(LogoutIcon)`
  background-color: ${theme.colors.neutral};
  border-radius: 50%;
  padding: 6px;
  height: calc(${theme.content.navbarSmall} / 2);
  position: absolute;
  right: 30px;
  top: calc(${theme.content.navbarSmall} / 4);
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.medium}) {
    height: calc(${theme.content.navbarMedium} / 2);
    top: calc(${theme.content.navbarMedium} / 4);
  }
  
  @media (min-width: ${theme.breakpoints.big}) {
    height: calc(${theme.content.navbarBig} / 2);
    top: calc(${theme.content.navbarBig} / 4);
  }
`;
