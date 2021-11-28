import { io } from "./http";
import { Socket } from "socket.io";

interface RoomUser {
  socket_id: string;
  username: string;
  room: string;
}
interface Message {
  room: string;
  text: string;
  createdAt: Date;
  username: string;
}

const users: RoomUser[] = [];
const messages: Message[] = [
  {
    room: "react",
    username: "Aristeu",
    text: "messagem",
    createdAt: new Date(),
  },
  {
    room: "react",
    username: "Aristeu",
    text: "messagem",
    createdAt: new Date(),
  },
  {
    room: "nodets",
    username: "Aristeu",
    text: "messagem",
    createdAt: new Date(),
  },
  {
    room: "nodets",
    username: "Aristeu",
    text: "messagem",
    createdAt: new Date(),
  },
];

io.on("connection", (socket: Socket) => {
  console.log("> Conected on server");
  socket.on("selected_room", (data, callback) => {
    console.log("> The user", data.user, "joy room", data.room);
    socket.join(data.room);

    const userInRoom = users.find((user) => {
      user.username === data.username && user.room === data.room;
    });

    if (userInRoom) {
      userInRoom.socket_id = socket.id;
    } else {
      users.push({
        room: data.room,
        username: data.username,
        socket_id: socket.id,
      });
    }
    const messagesRoom = getMessagesRoom(data.room);

    callback({
      messages: messagesRoom,
      user: data.user,
      room: data.room,
    });
  });

  socket.on("message", (data) => {
    const message: Message = {
      room: data.room,
      text: data.text,
      createdAt: data.createdAt,
      username: data.username,
    };
    messages.push(message);
    io.to(data.room).emit("message");
  });
});

function getMessagesRoom(room: string) {

  const messagesRoom = messages.filter((message) => {
    return message.room === room;
  });

  return messagesRoom;
}
