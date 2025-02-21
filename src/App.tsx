import "./App.css";
import Counter from "./components/Counter";
import Parent from "./components/Parent";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>App</h1>
        <Counter />
        <ThemeSwitcher />
        <Parent />
      </div>
    </ThemeProvider>
  );
};

export default App;
