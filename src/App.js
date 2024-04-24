import "./App.css";
import Login from "./pages/Login";
import AppContextProvider from "./store/app-context";

function App() {
  return (
    <AppContextProvider>
      <Login />
    </AppContextProvider>
  );
}

export default App;
