import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  return saved === "light" || saved === "dark" ? saved : "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: getInitialTheme() },
  reducers: {
    toggleTheme(state) {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
