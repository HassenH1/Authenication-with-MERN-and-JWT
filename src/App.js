import React from "react";
import { UserProvider } from "./context/user-context";
import InitialRoutes from "./routes/InitialRoutes";

function App() {
  return (
    <UserProvider>
      <InitialRoutes />
    </UserProvider>
  );
}

export default App;
