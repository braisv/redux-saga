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
export const SquareMediumButton = styled(MediumButton)`
  border-radius: 0;
`;

// Less important or optional actions 1
export const SquareButtonDelete = styled(SquareMediumButton)`
  background-color: ${theme.colors.delete};
  :hover {
    background-color: ${theme.colors.deleteActive};
  }
  :focus {
    background-color: ${theme.colors.deleteActive};
  }
`;

export const SquareButtonEdit = styled(SquareMediumButton)`
  background-color: ${theme.colors.edit};
  :hover {
    background-color: ${theme.colors.editActive};
  }
  :focus {
    background-color: ${theme.colors.editActive};
  }
`;

export const SquareButtonSuccess = styled(SquareMediumButton)`
  background-color: ${theme.colors.success};
  :hover {
    background-color: ${theme.colors.successActive};
  }
  :focus {
    background-color: ${theme.colors.successActive};
  }
`;

export const SquareButtonNeutral = styled(SquareMediumButton)`
  background-color: ${theme.colors.neutral};
  :hover {
    background-color: ${theme.colors.neutralActive};
  }
  :focus {
    background-color: ${theme.colors.neutralActive};
  }
`;


