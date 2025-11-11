import { useEffect } from "react";
import { useSelector } from "react-redux";

function ThemeSync() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return null;
}

export default ThemeSync;
