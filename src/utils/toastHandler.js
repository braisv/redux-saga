import { toast } from "react-toastify";
import { Row, Column } from "../components/containers/content";
import styled from "styled-components";
import { theme } from "../theme";

const launchToast = (message, type = "info") => {
  toast[type](
    <Container>
      <IconContainer>
        {type === "info" && (
          <svg
            id="Capa_1"
            className="info"
            enableBackground="new 0 0 515.556 515.556"
            height="18"
            viewBox="0 0 515.556 515.556"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm32.222 386.667h-64.444v-64.444h64.444zm.002-96.667h-64.444v-161.111h64.444z" />
          </svg>
        )}
        {type === "success" && (
          <svg
            id="Capa_1"
            className="success"
            enableBackground="new 0 0 515.556 515.556"
            height="18"
            viewBox="0 0 515.556 515.556"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm-32.222 383.899-103.338-103.338 45.564-45.564 57.774 57.774 122.218-122.218 45.564 45.564s-167.782 167.782-167.782 167.782z" />
          </svg>
        )}
        {type === "warning" && (
          <svg
            id="Capa_1"
            className="warning"
            enableBackground="new 0 0 515.556 515.556"
            height="18"
            viewBox="0 0 515.556 515.556"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm32.222 386.667h-64.444v-64.444h64.444zm.002-96.667h-64.444v-161.111h64.444z" />
          </svg>
        )}
        {type === "error" && (
          <svg
            id="Capa_1"
            className="error"
            enableBackground="new 0 0 515.556 515.556"
            height="18"
            viewBox="0 0 515.556 515.556"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm113.926 326.141-45.564 45.564-68.362-68.362-68.362 68.362-45.564-45.564 68.362-68.362-68.362-68.362 45.564-45.564 68.362 68.362 68.362-68.362 45.564 45.564-68.362 68.362s68.362 68.362 68.362 68.362z" />
          </svg>
        )}
      </IconContainer>
      <StatusMessage>{message || "Unexpected error"}</StatusMessage>
    </Container>,
    {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      rtl: false,
      pauseOnHover: true,
      draggable: true,
    }
  );
};

const Container = styled(Row)`
  justify-content: space-between;
  z-index: 999;
`;

const StatusMessage = styled(Row)`
  width: 100%;
`;

const IconContainer = styled(Column)`
  justify-content: flex-start;
  align-self: stretch;
  margin-right: 13px;
  height: 100%;
  padding-top: 5px;

  .info {
    fill: ${theme.colors.darkBlue};
  }

  .warning {
    fill: ${theme.colors.editActive};
  }

  .success {
    fill: ${theme.colors.successActive};
  }

  .error {
    fill: ${theme.colors.deleteActive};
  }
`;

export default launchToast;
