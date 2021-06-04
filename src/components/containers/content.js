import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { theme } from "../../theme";

export const MainContainer = styled.div`
  width: 100vw;
  min-height: calc(
    100vh - ${theme.content.navbarSmall} - ${theme.content.footerSmall}
  );
  height: auto !important;
  height: calc(
    100vh - ${theme.content.navbarSmall} - ${theme.content.footerSmall}
  );
  position: relative;
  background-color: ${theme.colors.darkBlue};
  margin-top: ${theme.content.navbarSmall};
  margin-bottom: ${theme.content.footerSmall};
  font-size: ${theme.fontSize.regular.small};
  display: flex;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.medium}) {
    min-height: calc(
      100vh - ${theme.content.navbarMedium} - ${theme.content.footerMedium}
    );
    height: calc(
      100vh - ${theme.content.navbarMedium} - ${theme.content.footerMedium}
    );
    margin-top: ${theme.content.navbarMedium};
    margin-bottom: ${theme.content.footerMedium};
    font-size: ${theme.fontSize.regular.medium};
  }

  @media (min-width: ${theme.breakpoints.big}) {
    min-height: calc(
      100vh - ${theme.content.navbarBig} - ${theme.content.footerBig}
    );
    height: calc(
      100vh - ${theme.content.navbarBig} - ${theme.content.footerBig}
    );
    margin-top: ${theme.content.navbarBig};
    margin-bottom: ${theme.content.footerBig};
    font-size: ${theme.fontSize.regular.big};
  }
`;

export const PageContent = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
  min-height: calc(
    100vh - ${theme.content.navbarSmall} - ${theme.content.footerSmall}
  );
  height: 100%;
  max-width: 1920px;
  padding: 15px;
  position: relative;

  @media (min-width: ${theme.breakpoints.medium}) {
    padding: 30px;
    min-height: calc(
      100vh - ${theme.content.navbarMedium} - ${theme.content.footerMedium}
    );
    height: 100%;
  }

  @media (min-width: ${theme.breakpoints.big}) {
    padding: 60px;
    min-height: calc(
      100vh - ${theme.content.navbarBig} - ${theme.content.footerBig}
    );
    height: 100%;
  }
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

export const Toast = styled(ToastContainer)`
  .Toastify__toast {
    &--info {
      background-color: ${theme.colors.blue};
    }
    &--success {
      background-color: ${theme.colors.success};
    }
    &--warning {
      background-color: ${theme.colors.edit};
    }
    t--error {
      background-color: ${theme.colors.delete};
    }
  }
`;
