import { Document } from "mongoose";
import { Tour } from "ts-models";
import TourModel from "../models/mongo/Tour";

 // step 2: create this file
function index(tourname: string): Promise<Tour[]> {
  return TourModel.find({ tourname: tourname })
    .then((list) => list)
    .catch((err) => {
        throw `${tourname} Not Found`;
      });
}

function get(userid: String): Promise<Tour> {
  return TourModel.find({  })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(Tour: Tour): Promise<Tour> {
  const p = new TourModel(Tour);
  return p.save();
}

function update(userid: String, Tour: Tour): Promise<Tour> {
    return new Promise((resolve, reject) => {
      TourModel.findOneAndUpdate({ userid }, Tour, {
        new: true,
      }).then((Tour) => {
        if (Tour) resolve(Tour);
        else reject("Failed to update Tour");
      });
    });
  }

export default { index, get, create, update };