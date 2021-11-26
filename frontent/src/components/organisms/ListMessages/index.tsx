import React, { useState } from "react";
import { Container } from "./styles";
import Message from "../../molecules/Message";
const ListMessages: React.FC = () => {

  const [messages, setMessages] = useState([])
  return (
    <Container>
      {messages.map(
        (msg: { text: string }, index: React.Key | null | undefined) => (
          <Message key={index} text={msg.text} user_id={1} />
        )
      )}
    </Container>
  );
};
export default ListMessages;
