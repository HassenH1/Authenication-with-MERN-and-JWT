import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(""); //TODO: need to update name

  //removes "user can login now" message from login page
  const timedLoginMessage = () => {
    setTimeout(() => {
      setUser("");
    }, 5000);
  };
  return (
    <UserContext.Provider
      value={{
        setUser,
        user,
        timedLoginMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error(`useUser must be used within a UserProvider`);
  return context;
};

export { UserProvider, useUser };
