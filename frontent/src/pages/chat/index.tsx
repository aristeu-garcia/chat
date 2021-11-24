import React, { useState } from "react";
import { AiOutlineSend, AiOutlineCaretDown } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { Container } from "./styles";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  function handleMessage(message: string) {
    setMessages((messages) => [...messages, message]);
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
          <div className="message left sb2">Tudo bem?</div>
          <div className="message left sb2">Como vai?</div>
          {messages.map((message, index) => (
            <>
              <div key={index} className="message right sb1">
                {message}
              </div>
            </>
          ))}
        </div>
        <div className="down-bar">
          <Input
            placeholder="Digite a mensagem..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            onClick={() => {
              handleMessage(message);
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
