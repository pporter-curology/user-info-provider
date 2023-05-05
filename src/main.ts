import cors from 'cors';
import express from "express";
import ViteExpress from "vite-express";

export const app = express();
const port = 3003;

app.use(cors());

app.get("/users", (_, res) => {
  const users = [{
    id: 1,
    firstName: 'Phillip',
    lastName: 'Porter'
  }];

  res.json(users);
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`)
);
