import { useNavigate } from "react-router-dom";
import "./Login.scss"

function Login() {
  const navigate = useNavigate();
  return (
    <div className="credentials">
      <input placeholder="enter email" className="user-name" type="text" />
      <input placeholder="enter password" className="password" type="text" />
      <a className="forgot-password" href="">Forgot password</a>
      <div className="create-account">
        <button className="button" onClick={() => navigate("/create-account")}>
          Create account
        </button>
      </div>
    </div>
  );
}

export default Login;
