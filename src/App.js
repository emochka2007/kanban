import logo from "./logo.svg";
import "./App.css";
import { MainPage } from "./components/MainPage/MainPage";
import { Header } from "./components/Header/Header";
import { StatusProvider } from "./components/Context/StatusContext";
function App() {
  return (
    <div className="App">
      <Header />
      <StatusProvider>
        <MainPage />
      </StatusProvider>
    </div>
  );
}

export default App;
