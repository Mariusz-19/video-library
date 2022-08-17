import { AppBar } from "./components";
import LeftBar from "./components/LeftBar/LeftBar";
import MainContent from "./components/MainContent/MainContent";
import "./App.scss";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <MainContent />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
