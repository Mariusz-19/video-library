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

  useEffect(() => {
    const errorMassages: Record<string, string> = {
      "Firebase: Error (auth/user-not-found).": "Wrong password",
    };
    if (error) {
      window.alert(errorMassages[error.message] || "Something went wrong");
    }
  }, [error]);

  const handleLogin = (e: any) => {
    e.preventDefault();

    const email = emailInputRef?.current?.value;
    const password = passwordInputRef?.current?.value;
    if (!email || !password) return;
    signInWithEmailAndPassword(email, password).catch((err) => {});
  };

  return (
    <div >
      <form className="credentials" onSubmit={handleLogin}>
        <input
          ref={emailInputRef}
          placeholder="enter email"
          className={`user-name ${error ? "error" : ""}`}
          type="email"
        />
        <input
          ref={passwordInputRef}
          placeholder="enter password"
          className={`password ${error ? "error" : ""}`}
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
