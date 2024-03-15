
import { Document } from "mongoose";
import { Artist } from "ts-models";
import ArtistModel from "../models/mongo/artist";

 // step 2: create this file
function index(): Promise<Artist[]> {
  return ArtistModel.find();
}

function get(userid: String): Promise<Artist> {
  return ArtistModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(Artist: Artist): Promise<Artist> {
  const p = new ArtistModel(Artist);
  return p.save();
}

function update(userid: String, Artist: Artist): Promise<Artist> {
    return new Promise((resolve, reject) => {
      ArtistModel.findOneAndUpdate({ userid }, Artist, {
        new: true,
      }).then((Artist) => {
        if (Artist) resolve(Artist);
        else reject("Failed to update Artist");
      });
    });
  }

export default { index, get, create, update };