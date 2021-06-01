import "./App.css";
import Router from "./routes/Router";
import { MainContainer } from "./components/containers/content";

const App = () => {
  return (
    <MainContainer className="App">
      <Router />
    </MainContainer>
  );
};

export default App;
