// src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./mongoConnect";

import profiles from "./services/profiles";
import { Profile } from "./models/profile";

import { loginUser, registerUser } from "./auth";
import artists from "./services/artists";
import { Artist, Tours, Tour, SetList } from "ts-models";
import tours from "./services/tours";
import tour from "./services/tour";
import setlist from "./services/setlist";

console.log("Connecting to MongoDB"); 

export const app = express();
const port = process.env.PORT || 3000;

console.log("Connecting to MongoDB");
app.use(cors());
app.use(express.json());

console.log("Connecting to MongoDB");
connect("soundwavecollective");

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});
// in src/index.ts, after the previous app.get()
app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

// in src/index.ts, with the other app.get()
app.get("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  profiles
    .get(userid)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});
app.put("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newProfile = req.body;
  console.log(newProfile, userid)
  // return;
  profiles
    .update(userid, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.post("/api/login", (req: Request, res: Response) => {
});


//get the list of artists 
app.get("/api/artists", (req: Request, res: Response) => {
  artists
    .index()
    .then((list: Artist[]) => res.json(list));
});


//get the tours by artists
app.get("/api/tours/:artistname", (req: Request, res: Response) => {
  const { artistname } = req.params;
  tours
    .index(artistname)
    .then((list: Tours[]) => res.json(list));
});

// step 4
//get the tourInfo by tourname
app.get("/api/tours/get/:tourname", (req: Request, res: Response) => {
  const { tourname } = req.params;
  console.log(tourname)
  tour
    .index(tourname)
    .then((list: Tour[]) => res.json(list));
});


app.get("/api/setlist/:tourname/:tourdate", (req: Request, res: Response) => {
  const { tourname, tourdate } = req.params;
  console.log(tourdate, tourname)
  console.log(tourname)
  setlist
    .index(tourname, tourdate)
    .then((list: SetList[]) => res.json(list));
});




 app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});