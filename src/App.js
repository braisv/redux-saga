import Router from "./routes/Router";
import { MainContainer } from "./components/containers/content";

const App = () => {
  return (
    <MainContainer>
      <Router />
    </MainContainer>
  );
};

export default App;
