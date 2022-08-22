import "./App.scss";
import { AppBar, LeftBar, MainContent, AuthProvider } from "./components"

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
