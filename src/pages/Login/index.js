import { useState } from "react";
import { PageContent } from "../../components/containers/content";
import { logIn } from "../../services/authService";
import { LoginForm } from "./styles";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <PageContent>
      <LoginForm onSubmit={() => logIn(props, { email, password })}>
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="somemail@mail.mail"
          onChange={({ target }) => setEmail(target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="somemail@mail.mail"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button onClick={() => logIn(props, { email, password })}>
          Submit
        </button>
      </LoginForm>
    </PageContent>
  );
};

export default Login;
