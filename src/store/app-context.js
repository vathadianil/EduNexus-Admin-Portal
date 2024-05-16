import { createContext, useState } from "react";

export const AppContext = createContext({
  userAdded: null,
  onUserAdd: () => {},
});

export default function AppContextProvider({ children }) {
  const [userAdded, setUserAdded] = useState(null);
  function onUserAdd(value) {
    setUserAdded(value);
  }
  const ctx = {
    userAdded: userAdded,
    onUserAdd: onUserAdd,
  };
  return <AppContext.Provider value={ctx}> {children} </AppContext.Provider>;
}
