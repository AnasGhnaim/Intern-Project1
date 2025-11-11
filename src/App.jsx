import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
const router = createRouter({ routeTree });

function App() {
  return (
    <Provider store={store}>
      {/* <ThemeProvider> */}
      {/* <FavoritesProvider> */}
      <RouterProvider router={router} />
      {/* </FavoritesProvider> */}
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default App;
