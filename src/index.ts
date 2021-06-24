import * as express from "express";
import { Request, Response } from "express";

const app = express();
const port = 3002;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Typescript");
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
