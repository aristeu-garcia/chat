import React from "react";
import Global from "./styles/global";
import Router from "./routes";
const App: React.FC = () => {
  return (
    <>
      <Router />
      <Global />
    </>
  );
};

export default App;
