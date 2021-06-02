import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";

const LoginGoogle = () => {
  const history = useHistory();
  const onSuccess = (res) => {
    console.log("[Login Google Success] current user:", res);
    localStorage.setItem("token", res.tokenId);
    history.push("/");
  };
  const onFailure = (res) => {
    console.log("[Login Google Failed] res:", res);
  };
  console.log({ clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID });
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login here Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginGoogle;
