import FacebookLogin from "react-facebook-login";
import { useHistory } from "react-router";

const LoginFacebook = () => {
  const history = useHistory();
  const onSuccess = (res) => {
    console.log("[Login Facebook Success] current user:", res);
    if (res.accessToken) localStorage.setItem("token", res.accessToken);
    history.push("/");
  };

  return (
    <div>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends"
        callback={onSuccess}
        icon="fa-facebook"
      />
    </div>
  );
};

export default LoginFacebook;
