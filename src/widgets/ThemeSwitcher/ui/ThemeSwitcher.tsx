import classNames from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <DarkIcon />
    </button>
  );
}
