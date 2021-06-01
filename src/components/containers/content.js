import styled from "styled-components";
import { theme } from "../../theme";

export const MainContainer = styled.div`
  width: 100vw;
  height: calc(
    100vh - ${theme.content.navbarSmall} - ${theme.content.footerSmall}
  );
  position: relative;
  padding-top: ${theme.content.navbarSmall};
  padding-bottom: ${theme.content.footerSmall};
`;

export const PageContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  position: relative;
`;
