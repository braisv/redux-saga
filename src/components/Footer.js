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
  height: ${theme.content.footerSmall};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: -${theme.content.footerSmall};

  @media (min-width: ${theme.breakpoints.medium}) {
    height: ${theme.content.footerMedium};
    margin-bottom: -${theme.content.footerMedium};
    font-size: ${theme.fontSize.regular.medium};
  }
  
  @media (min-width: ${theme.breakpoints.big}) {
    height: ${theme.content.footerBig};
    margin-bottom: -${theme.content.footerBig};
    font-size: ${theme.fontSize.regular.big};
  }
`;
