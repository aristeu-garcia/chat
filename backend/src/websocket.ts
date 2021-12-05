import { io } from "./http";
import { IRoomUser, IRoom } from "Interface/ISocket";

const users: IRoomUser[] = [];

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
io.on("connection", (socket: any) => {
  console.log("> Connected");

  socket.on("selected_room", (data: IRoom) => {
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
  });

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data: any): void => {
    console.log(data.room);
    io.in(data.room).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on("disconnect", () => {
    socket.leave();
    console.log("> Disconnected");
  });
});
