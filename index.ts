import * as express from "express";
import { getUsers, addUser } from "./users";
import * as bodyParser from "body-parser";

const { PORT = 3321 } = process.env;

const app = express();

app.use(bodyParser.json());

app.get("/", async (_, res) => {
  const users = await getUsers();

  res.json({ users });
});

app.post("/", async (req, res) => {
  const user = await addUser(req.body.user);

  res.json({ user });
});

app.listen(PORT, () => console.log(`App running on ${PORT}`));
