import React, { useEffect, useState } from "react";
import { AiOutlineSend, AiOutlineCaretDown } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { Container } from "./styles";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import Message from "../../components/molecules/Message";
import { useParams } from "react-router-dom";
import { Messages } from "../../global/Messages";
import { IMessage } from "../../interfaces/IMessage";
import { appSocket } from "../../api/socket";
const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { room, user } = useParams();
  useEffect(() => {
    let messagesRoom = Messages.getMessages();
    setMessages(messagesRoom);
    // console.log("messages", messages);
  }, []);

  function handleMessage(message: IMessage) {
    appSocket.emit("message", {
      room,
      text: message.text,
      createdAt: Date.now(),
      username: user,
    });
    Messages.addMessages(message);
    // console.log('depois do handle',messages)
    let messages = Messages.getMessages();
    setMessages(messages);
    console.log("messages", messages);
    return (
      <>
        <div className="message right">{message}</div>
      </>
    );
  }
  return (
    <Container>
      <div className="container-chat">
        <div className="top-bar">
          <div>
            <FaHome size={20} />
          </div>

          <span>Home</span>
          <AiOutlineCaretDown size={20} />
        </div>
        <div className="container-messages">
          {messages.map((message) => (
            <Message
              key={Math.random()}
              user={message.user}
              text={message.text}
            ></Message>
          ))}
          {/* <Message user_id={1} text={"Olá eu sou aristeu"}></Message>
          <Message user_id={2} text={"Olá eu sou fulano"}></Message> */}

          {/* <div className="message left sb2">Tudo bem?</div>
          <div className="message left sb2">Como vai?</div>
          {messages.map((message, index) => (
            <>
              <div key={index} className="message right sb1">
                {message}
              </div>
            </>
          ))} */}
        </div>
        <div className="down-bar">
          <Input
            placeholder="Digite a mensagem..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            onClick={() => {
              handleMessage({ user, room, text: message } as IMessage);
            }}
          >
            <AiOutlineSend size={28} />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Chat;
