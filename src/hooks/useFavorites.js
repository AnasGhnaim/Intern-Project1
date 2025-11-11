import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoriteSlice";

export const useFavorites = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items);

  const handleToggle = (movie) => {
    dispatch(toggleFavorite(movie));
  };

  const isFavorite = (id) => {
    return favorites.some((m) => m.imdbID === id);
  };

  return {
    favorites,
    toggleFavorite: handleToggle,
    isFavorite,
  };
};
