import { AppBar } from "./components";
import LeftBar from "./components/LeftBar/LeftBar";
import "./App.scss";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <AppBar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
