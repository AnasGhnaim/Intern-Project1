import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ThemeSync from "./components/ThemeSync";

const router = createRouter({ routeTree });

function App() {
  return (
    <Provider store={store}>
      <ThemeSync />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
