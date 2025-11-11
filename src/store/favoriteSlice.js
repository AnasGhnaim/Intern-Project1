import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem("favoriteMovies");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (items) => {
  try {
    localStorage.setItem("favoriteMovies", JSON.stringify(items));
  } catch (error) {
    console.error("could not save to favorites", error);
  }
};

const initialState = {
  items: loadFromLocalStorage(),
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const movie = action.payload;
      const exists = state.items.find((m) => m.imdbID === movie.imdbID);
      if (exists) {
        state.items = state.items.filter((m) => m.imdbID !== movie.imdbID);
      } else {
        state.items.push(movie);
      }
      saveToLocalStorage(state.items);
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
