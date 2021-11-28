import express from "express";
import http from "http";

const app = express();

const serverHttp = http.createServer(app);

const io = require("socket.io")(serverHttp, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

export { serverHttp, io };
