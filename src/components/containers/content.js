import styled from "styled-components";
import { theme } from "../../theme";

export const MainContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: calc(
    100vh - ${theme.content.navbarSmall} - ${theme.content.footerSmall}
  );
  max-height: calc(
    100vh - ${theme.content.navbarSmall} - ${theme.content.footerSmall}
  );
  position: relative;
  margin-top: ${theme.content.navbarSmall};
  margin-bottom: ${theme.content.footerSmall};
  font-size: ${theme.fontSize.regular.small};
`;

export const PageContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  padding: 15px;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
