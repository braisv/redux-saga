import { useEffect, useState } from "react";
import { BigButton } from "../../components/buttons/content";
import LoginFacebook from "../../components/SocialLogin/LoginFacebook";
import LoginGoogle from "../../components/SocialLogin/LoginGoogle";
import { Error } from "../../components/Text";
import { logIn } from "../../services/authService";
import { LoginContainer, LoginForm, Box } from "./styles";
import BarLoader from "react-spinners/BarLoader";
import { theme } from "../../theme";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const verifyLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    const regEx = /^[^\s@]+@[^\s@]+$/;
    const validEmail = regEx.test(email);
    const validPassword = password && password !== "";
    if (validEmail && validPassword) {
      setLoading(true);
      const response = await logIn(props, { email, password });
      if (response.status === 200) {
        console.log("[Login success]");
      } else {
        console.log("[Login Failure]", response.message);
        if (response.status === 400) setErrorEmail("Wrong email or password");
      }
      setLoading(false);
    } else {
      if (!validPassword) setErrorPassword("Password required");
      if (!validEmail) setErrorEmail("Invalid email provided");
      if (!email || email === "") setErrorEmail("Email required");
    }
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      if (errorEmail) setErrorEmail(false);
      if (errorPassword) setErrorPassword(false);
    }
    return () => {
      isCancelled = true;
    };
  }, [email, password]);

  return (
    <LoginContainer>
      <LoginForm onSubmit={(e) => verifyLogin(e)}>
        <Box>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Insert valid email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <Error error={errorEmail} absolute>
            {errorEmail}
          </Error>
        </Box>
        <Box>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Insert password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Error error={errorPassword} absolute>
            {errorPassword}
          </Error>
        </Box>
        <BigButton onClick={(e) => verifyLogin(e)}>Log In</BigButton>
        <LoginGoogle />
        <LoginFacebook />
      </LoginForm>
      <BarLoader
        color={theme.colors.blue}
        loading={loading}
        size={50}
        data-testid="loading"
      />
    </LoginContainer>
  );
};

export default Login;
