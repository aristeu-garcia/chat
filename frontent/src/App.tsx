import React from "react";
import Global from "./styles/global";
import Chat from "./pages/chat";

const App: React.FC = () => {

  return (
    <>
      <Chat></Chat>
      <Global />
    </>
  );
};

export default App;
