import React, { useState } from "react";
import { AiOutlineSend, AiOutlineCaretDown } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { Container } from "./styles";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import Message from "../../components/molecules/Message";
import { useParams } from "react-router-dom";
import useChat from "../../hooks/useChat";
import { IMessageObject, ISendMessage } from "../../interfaces/IMessage";
const Chat: React.FC = () => {
  const { user, room } = useParams();
  const [newMessage, setNewMessage] = useState<ISendMessage>(
    {} as ISendMessage
  );
  const { messages, sendMessage } = useChat(user, room);

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage({} as ISendMessage);
  };

  return (
    <Container>
      <div className="container-chat">
        <div className="top-bar">
          <div>
            <FaHome size={20} />
          </div>

          <span>{room?.toUpperCase()}</span>
          <AiOutlineCaretDown size={20} />
        </div>
        <div className="container-messages">
          {messages.map((message: IMessageObject) => (
            <Message
              ownedByCurrentUser={message.ownedByCurrentUser}
              text={message.body}
            ></Message>
          ))}
        </div>
        <div className="down-bar">
          <Input
            placeholder="Digite a mensagem..."
            value={newMessage.body?.toString()}
            onChange={(e) =>
              setNewMessage((message: any) => {
                message.body = e.target.value;
                message.room = room;
                return message;
              })
              
            }
          />
          <Button onClick={handleSendMessage}>
            <AiOutlineSend size={28} />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Chat;
