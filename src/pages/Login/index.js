import { useState } from "react";
import { BigButton } from "../../components/buttons/content";
import { PageContent } from "../../components/containers/content";
import LoginFacebook from "../../components/SocialLogin/LoginFacebook";
import LoginGoogle from "../../components/SocialLogin/LoginGoogle";
import { logIn } from "../../services/authService";
import { LoginContainer, LoginForm } from "./styles";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <PageContent>
      <LoginContainer>
        <LoginForm onSubmit={() => logIn(props, { email, password })}>
          <label>EMAIL</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <BigButton onClick={() => logIn(props, { email, password })}>
            Log In
          </BigButton>
        </LoginForm>
        <LoginGoogle />
        <LoginFacebook />
      </LoginContainer>
    </PageContent>
  );
};

export default Login;
