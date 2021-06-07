import styled from "styled-components";
import { theme } from "../../theme";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: ${theme.colors.dark};
  min-height: calc(
    100vh - ${theme.content.navbarSmall} - ${theme.content.footerSmall}
  );
  height: 100%;
  border-top: 2px solid ${theme.colors.white}30;
  padding: 30px;

  button {
    margin: 10px 0;
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px !important;
    box-shadow: none !important;
    height: 45px !important;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  justify-content: center;
  font-size: ${theme.fontSize.title.small};
  margin-bottom: 30px;

  input {
    background-color: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${theme.colors.white}80;
    margin-top: 10px;
    margin-bottom: 50px;
    padding: 8px;
    color: ${theme.colors.blue};
    font-size: ${theme.fontSize.title.small};

    :focus {
      outline: none;
      border: none;
      border-bottom: 1px solid ${theme.colors.blue}80;
    }
  }

  label {
    font-weight: bold;
    color: ${theme.colors.white};
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
