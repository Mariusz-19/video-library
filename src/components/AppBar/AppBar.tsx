import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import LoginButton from "../LoginButton/LoginButton";
import SearchBox from "../SearchItem/SearchItem";
import { auth } from "../../core/modules/firebase";
import "./AppBar.scss";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="app-bar">
      <SearchBox />
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
