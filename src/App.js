import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import AppContextProvider from "./store/app-context";

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={routes} />
    </AppContextProvider>
  );
}

export default App;
