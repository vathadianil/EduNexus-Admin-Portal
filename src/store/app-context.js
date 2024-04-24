import { createContext, useState } from "react";

export const AppContext = createContext({
  loginData: {},
  authenticate: () => {},
  logout: () => {},
});

function AppContextProvider({ children }) {
  const [loginData, setLoginData] = useState({});

  function authenticate(loginData) {
    setLoginData(loginData);
    localStorage.setItem("loginData", JSON.stringify(loginData));
  }

  function logout() {
    setLoginData({});
    localStorage.removeItem("loginData");
  }

  const value = {
    loginData: loginData,
    isAuthenticated: !!loginData.token,

    authenticate: authenticate,
    logout: logout,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
