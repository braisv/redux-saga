import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LogoutGoogle = () => {
  const onSuccess = () => {
    console.log("Logout successfully");
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default LogoutGoogle;
