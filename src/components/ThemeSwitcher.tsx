import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h2>ThemeSwitcher - {theme}</h2>
      <button onClick={toggleTheme}>Toggle</button>
    </>
  );
};

export default ThemeSwitcher;
