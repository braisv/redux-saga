import Router from "./routes/Router";
import { MainContainer, Toast } from "./components/containers/content";

const App = () => {
  return (
    <MainContainer>
      <Toast />
      <Router />
    </MainContainer>
  );
};

export default App;
