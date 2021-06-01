import styled from "styled-components";
import { theme } from "../../theme";

const Button = ({ children, ...props }) => {
  return (
    <button {...props}>{props.loading ? <p>Loading...</p> : children}</button>
  );
};

// Most important or required actions
export const BigButton = styled(Button)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 42px;
  min-width: 95px;
  width: ${({ width }) => width || "unset"};
  border: none;
  border-radius: 6px;
  padding: 0 15px;
  white-space: nowrap;
  font-size: ${theme.fontSize.title.small};
  color: ${theme.colors.white};
  background-color: ${({ disabled }) =>
    disabled ? `${theme.colors.dark}60` : theme.colors.dark};
  :hover {
    background-color: ${({ disabled }) =>
      disabled ? `${theme.colors.dark}60` : theme.colors.darkBlue};
    cursor: pointer;
  }
  :focus {
    outline: none;
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : `2px 2px 15px ${theme.colors.darkBlue}60`};
  }
`;

// Important or required actions 1
export const MediumButton = styled(BigButton)`
  height: 30px;
  min-width: 75px;
  font-size: ${theme.fontSize.regular.small};
  width: ${({ width }) => width || "unset"};
`;

// Important or required actions 2
export const MediumButtonWhite = styled(MediumButton)`
  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `2px solid ${theme.colors.primaryColor}`};
  :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    div[class^="css"] {
      border-color: ${({ theme }) => theme.colors.white};
      border-bottom-color: transparent;
    }
  }
  :focus {
    color: ${({ theme }) => theme.colors.primaryColor};
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `2px solid ${theme.colors.darkPrimaryColor}`};
  }
  div[class^="css"] {
    border-color: ${({ theme }) => theme.colors.primaryColor};
    border-bottom-color: transparent;
  }
  ${({ margins }) => (margins ? "margin: 0 10px;" : "")}
`;

// Less important or optional actions 1
export const MediumButtonGrey = styled(MediumButton)`
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `2px solid ${theme.colors.darkGrey}`};
  :hover {
    color: ${({ theme }) => theme.colors.darkBrown};
    background-color: ${({ theme }) => theme.colors.lightGrey};
    div[class^="css"] {
      border-color: ${({ theme }) => theme.colors.darkBrown};
      border-bottom-color: transparent;
    }
  }
  :focus {
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `2px solid ${theme.colors.darkBrown}`};
  }
  div[class^="css"] {
    border-color: ${({ theme }) => theme.colors.darkGrey};
    border-bottom-color: transparent;
  }
  ${({ margins }) => (margins ? "margin: 0 10px;" : "")}
`;
