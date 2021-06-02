import styled from "styled-components";
import { theme } from "../../theme";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: ${theme.colors.lightBackground};
  padding: 15px;
  border-radius: 6px;
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
    border-bottom: 1px solid ${theme.colors.white}80;
    margin-top: 10px;
    margin-bottom: 50px;
    padding: 8px;
    color: ${theme.colors.regularBackground};
    font-size: ${theme.fontSize.title.small};

    :focus {
      outline: none;
      border: none;
      border-bottom: 1px solid ${theme.colors.darkBlue}80;
    }
  }

  label {
    font-weight: bold;
    color: ${theme.colors.white};
  }
`;
