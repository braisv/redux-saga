import { useState } from "react";
import { logIn } from "../../services/authService";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <form onSubmit={() => logIn(props, { email, password })}>
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
      </form>
      <button onClick={() => logIn(props, { email, password })}>Submit</button>
    </div>
  );
};

export default Login;
