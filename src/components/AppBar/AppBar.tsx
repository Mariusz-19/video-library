import LoginButton from "../LoginButton/LoginButton";
import SearchBox from "../SearchItem/SearchItem";
import "./AppBar.scss";

function AppBar() {
  return (
    <div className="app-bar">
      <SearchBox />
      <LoginButton />
    </div>
  );
}

export default AppBar;
