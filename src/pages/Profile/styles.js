import styled from "styled-components";
import { Column, Row } from "../../components/containers/content";
import { theme } from "../../theme";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(
    100vh - 30px - ${theme.content.navbarSmall} - ${theme.content.footerSmall}
  );
  padding-bottom: 60px;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ edit }) => edit ? theme.colors.blue : theme.colors.purple};
  border-radius: 6px;
  height: 450px;
  width: 250px;
  font-size: ${theme.fontSize.regular.small};
  color: ${theme.colors.white};
  overflow: hidden;
  box-shadow: 3px 3px 10px ${theme.colors.darkBlue}80;
  transition: all .3s ease;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.darkBlue}80;
  background-color: ${theme.colors.neutral};
  min-height: 100px;
  width: 100%;

  img {
    width: 100%;
  }
`;

export const EmptyAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.neutral};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 10px;

  span {
    margin: 3px 0;
    text-align: center;
  }

  .name {
    font-size: ${theme.fontSize.title.small};
  }

  .id {
    color: ${theme.colors.darkBlue};
    font-weight: bold;
  }
`;

export const ButtonsContainer = styled(Column)`
  width: 100%;
  font-size: ${theme.fontSize.title.small};
  position: absolute;
  bottom: 0;
  left: 0;

  div {
    width: 100%;
  }

  button {
    width: 100%;
  }

  .back {
    border-bottom: 1px solid ${theme.colors.darkBlue}80;
  }

  .next {
    border-left: 1px solid ${theme.colors.darkBlue}80;
  }
`;

export const CardActions = styled(Row)`
  width: 100%;

  .next {
    border-left: 1px solid ${theme.colors.darkBlue}80;
  }
`;

export const InputText = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${theme.colors.white}80;
  margin: 5px 0;
  padding: 2px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.regular.small};

  :focus {
    outline: none;
    border: none;
    border-bottom: 1px solid ${theme.colors.darkBlue}80;
  }
`
