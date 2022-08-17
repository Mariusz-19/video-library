import { createRef, FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../core/modules/firebase";
import "./CreateAccount.scss";

function CreateAccount() {
  const emailInputRef = createRef<HTMLInputElement>();
  const passwordInputRef = createRef<HTMLInputElement>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailInputValue = emailInputRef.current?.value;
    const passwordInputValue = passwordInputRef.current?.value;

    if (!emailInputValue || !passwordInputValue) return;

    createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
      .catch((error) => {
        // TODO Add Error Handling
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
