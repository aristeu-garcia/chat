import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { appSocket } from "../api/socket";
import { IText } from "../interfaces/IMessage";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = (user: any, room: any) => {
  const [messages, setMessages] = useState<IText[]>([] as IText[]);
  const socketRef = useRef(appSocket);

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { room },
    });
    socketRef.current.emit("selected_room", {
      room,
      user,
    });
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [user, room]);

  const sendMessage = (message: any) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: message.body,
      senderId: socketRef.current.id,
      room: message.room,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
