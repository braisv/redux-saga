import styled from "styled-components";
import { theme } from "../theme";

export const Error = styled.p`
  position: ${({ absolute }) => (absolute ? "absolute" : "relative")};
  bottom: ${({ error }) => (error ? "25px" : "0")};
  left: 0;
  font-size: ${theme.fontSize.regular.small};
  margin-top: -30px;
  color: ${theme.colors.delete};
  opacity: ${({ error }) => (error ? "1" : "0")};
  transition: all 0.2s ease;
`;

export const BigTitle = styled.h1`
  font-size: 120px;
  color: ${theme.colors.blue};
  font-weight: bold;
`;
