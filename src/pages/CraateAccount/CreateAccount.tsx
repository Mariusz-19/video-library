import { createRef } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../core/modules/firebase";
import "./CreateAccount.scss";

function CreateAccount() {
  const navigate = useNavigate();
  const emailInputRef = createRef<HTMLInputElement>();
  const passwordInputRef = createRef<HTMLInputElement>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const emailInputValue = emailInputRef.current?.value;
    const passwordInputValue = passwordInputRef.current?.value;

    if (!emailInputValue || !passwordInputValue) return;

    createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form" action="">
      write your email
      <input className="email" type="email" ref={emailInputRef} />
      create password
      <input className="password" type="password" ref={passwordInputRef} />
      confirm password
      <input className="password" type="password" />
      <button className="login-button" type="submit">
        create account
      </button>
    </form>
  );
}

export default CreateAccount;
