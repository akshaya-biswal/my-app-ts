import "./App.css";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>App</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
