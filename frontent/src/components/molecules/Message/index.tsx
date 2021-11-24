import React from "react";
import { Container } from "./styles";
import { IMessage } from "../../../interfaces/IMessage";
const Message: React.FC<IMessage> = ({ text, date, user_id }) => {
  const authUser = 1;
  return (
    <Container>
      <div
        className={
          user_id === authUser ? "message right sb1" : "message left sb2"
        }
      ></div>
    </Container>
  );
};
export default Message;
