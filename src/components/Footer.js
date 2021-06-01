import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Footer = () => {
  return <FooterContainer>Developed by Brais Vidal</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.div`
  background-color: ${theme.colors.regularBackground};
  color: ${theme.colors.white};
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  left: 0;
`;
