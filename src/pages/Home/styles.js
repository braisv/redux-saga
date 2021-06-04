import styled from "styled-components";
import { theme } from "../../theme";

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 45px;
  min-height: calc(
    100vh - 30px - ${theme.content.navbarSmall} - ${theme.content.footerSmall} -
      45px
  );

  @media (min-width: ${theme.breakpoints.medium}) {
    min-height: calc(
      100vh - 105px - ${theme.content.navbarMedium} - ${theme.content.footerMedium}
    );
  }

  @media (min-width: ${theme.breakpoints.big}) {
    min-height: calc(
      100vh - 90px - ${theme.content.navbarBig} - ${theme.content.footerBig} -
        75px
    );
  }
`;

export const UserListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 15px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.medium}) {
    grid-gap: 45px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  @media (min-width: ${theme.breakpoints.big}) {
    grid-gap: 60px;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
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

  @media (min-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize.title.medium};
  }

  @media (min-width: ${theme.breakpoints.big}) {
    font-size: ${theme.fontSize.title.big};
  }
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
    display: none;
  }

  button {
    margin: 0 5px;
  }

  @media (min-width: 350px) {
    .paginator {
      display: block;
    }

    button {
      margin: 0;
    }
  }

  @media (min-width: ${theme.breakpoints.medium}) {
    font-size: ${theme.fontSize.title.medium};
  }

  @media (min-width: ${theme.breakpoints.big}) {
    font-size: ${theme.fontSize.title.big};
  }
`;
