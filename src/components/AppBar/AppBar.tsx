import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../core/modules/firebase";
import { AuthContext, LoginButton, SearchItem } from "..";
import "./AppBar.scss";

function AppBar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="app-bar">
      <SearchItem />
      {user ? (
        user?.email
      ) : (
        <React.Fragment>
          <LoginButton />
          <button onClick={() => navigate("/create-account")}>
            Create account
          </button>
        </React.Fragment>
      )}
      {user ? <button onClick={() => signOut(auth)}>Logout</button> : null}
    </div>
  );
}

export default AppBar;
