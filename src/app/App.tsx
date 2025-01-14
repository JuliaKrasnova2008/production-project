import "./styles/index.scss";
import classNames from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>change theme</button>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
