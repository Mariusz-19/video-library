import { createRef, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../core/modules/firebase";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const emailInputRef = createRef<HTMLInputElement>();
  const passwordInputRef = createRef<HTMLInputElement>();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (e: any) => {
    e.preventDefault();

    const email = emailInputRef?.current?.value;
    const password = passwordInputRef?.current?.value;
    if (!email || !password) return;
    signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(error);
      });
  };

  return (
    <div className="credentials">
      <form onSubmit={handleLogin}>
        <input
          ref={emailInputRef}
          placeholder="enter email"
          className="user-name"
          type="email"
        />
        <input
          ref={passwordInputRef}
          placeholder="enter password"
          className="password"
          type="password"
        />
        <a className="forgot-password" href="">
          Forgot password
        </a>
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
