import React from "react";
import { Container } from "./styles";
import { IMessage } from "../../../interfaces/IMessage";
const Message: React.FC<IMessage> = ({ text, user_id }) => {
  const authUser = 1;
  return (
    <Container
      className={
        user_id === authUser ? "message right sb1" : "message left sb2"
      }
    >
      {text}
    </Container>
  );
};
export default Message;
