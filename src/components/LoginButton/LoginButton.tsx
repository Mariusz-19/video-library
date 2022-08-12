import { useNavigate } from "react-router-dom";
import "./LoginButton.scss";
function LoginButton() {
  const navigate = useNavigate();

  return (
    <button className="login-button" onClick={() => navigate("/login")}>
      Login
    </button>
  );
}

export default LoginButton;
