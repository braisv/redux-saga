import styled from "styled-components";
import { theme } from "../../theme";

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;

export const UserListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 15px;
  width: 100%;
  margin-bottom: 60px;
`;

export const UserCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.purple};
  border-radius: 6px;
  height: 75px;
  font-size: ${theme.fontSize.title.small};
  color: ${theme.colors.white};
  cursor: pointer;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: ${theme.fontSize.title.small};
  margin-bottom: 15px;
  position: absolute;
  bottom: 0;
  left: 0;

  .paginator {
    margin: 0 10px;
    color: ${theme.colors.dark};
  }
`;
