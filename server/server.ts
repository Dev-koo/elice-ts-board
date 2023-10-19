import express from "express";
import cors from "cors";

import boardRouter from "./routes/boards";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/boards", boardRouter);

const port = 3002; //node 서버가 사용할 포트 번호, 리액트의 포트번호(3000)와 충돌하지 않게 다른 번호로 할당
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
