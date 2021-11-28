import React, { useEffect } from "react";
import { Container } from "./styles";
import { IMessage } from "../../../interfaces/IMessage";
import { appSocket } from "../../../api/socket";
const Message: React.FC<IMessage> = ({ text, user }) => {
  let userAuth = localStorage.getItem("@auth/user");
  // useEffect(() => {
  //   const test = appSocket.emit("selected_room", "react");
  //   console.log(test);
  // }, []);
  return (
    <Container
      className={user === userAuth ? "message right sb1" : "message left sb2"}
    >
      {text}
    </Container>
  );
};
export default Message;
