import React, { useState } from "react";
import { Container } from "./styles";
import { AiOutlineSend } from "react-icons/ai";
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
        <div className="top-bar"></div>
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
          <input
            placeholder="Digite a mensagem..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={() => {
              handleMessage(message);
            }}
          >
            <AiOutlineSend size={28} />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Chat;
