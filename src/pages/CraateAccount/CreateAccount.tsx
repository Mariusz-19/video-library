import { useNavigate } from "react-router-dom";
import "./CreateAccount.scss"
function CreateAccount() {
  const navigate = useNavigate();

  return (
    <form className= "form" action="">
      write your email<input className="email" type="email" />
      create password<input className="password" type="password" />
      confirm password<input className="password" type="password" />
      <button className="login-button" onClick={() => navigate("/login")}>
        Login
      </button>
    </form>
  );
}

export default CreateAccount;
