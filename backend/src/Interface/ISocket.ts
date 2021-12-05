export interface IRoomUser {
  socket_id: string;
  username: string;
  room: string;
}

export interface IRoom {
  user: string;
  room: string;
  username: string;
}
