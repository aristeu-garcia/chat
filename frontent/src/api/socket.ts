import IO from 'socket.io-client';
export const appSocket = IO("http://localhost:3333", {
  secure: false
});

// const io = require("socket.io-client");
// const socket = io("https://api.example.com", {
//   withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "abcd"
//   }
// });