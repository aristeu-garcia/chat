import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Room from "../pages/room";
import Chat from "../pages/chat";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Room />} path="/" />
        <Route element={<Chat />} path="/chat" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
