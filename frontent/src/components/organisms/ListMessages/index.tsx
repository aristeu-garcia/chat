import React, { useState } from "react";
import { Container } from "./styles";
import Message from "../../molecules/Message";
import { IMessage } from "../../../interfaces/IMessage";
import { appSocket } from "../../../api/socket";
const ListMessages: React.FC = () => {
  // async function fetchMessages() {
  //   await appSocket.emit
  // }
  const [messages, setMessages] = useState<IMessage[]>([]);
  return (
    <Container>
      {messages.map(
        (
          msg: IMessage,
          index: React.Key | null | undefined
        ) => (
          <Message key={index} text={msg.text} user={msg.user} room="nodets" />
        )
      )}
    </Container>
  );
};
export default ListMessages;
