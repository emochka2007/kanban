import logo from "./logo.svg";
import "./App.css";
import { MainPage } from "./components/MainPage/MainPage";
import { Header } from "./components/Header/Header";
import { TaskProvider } from "./components/Context/TaskContext";
function App() {
  return (
    <div className="App">
      <Header />
      <TaskProvider>
        <MainPage />
      </TaskProvider>
    </div>
  );
}

export default App;
