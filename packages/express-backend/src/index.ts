// src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./mongoConnect";

import profiles from "./profiles";
import { Profile } from "./models/profile";


console.log("Connecting to MongoDB"); 

const app = express();
const port = process.env.PORT || 3000;

console.log("Connecting to MongoDB");
app.use(cors());
app.use(express.json());

console.log("Connecting to MongoDB");
connect("soundwavecollective");

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});
// in src/index.ts, with the other app.get()
app.get("/api/profile/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  profiles
    .get(userid)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

// in src/index.ts, after the previous app.get()
app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});