import { Document } from "mongoose";
import { Tours } from "ts-models";
import ToursModel from "../models/mongo/tours";

 // step 2: create this file
function index(artist: string): Promise<Tours[]> {
  return ToursModel.find({ artist: artist })
    .then((list) => list)
    .catch((err) => {
        throw `${artist} Not Found`;
      });
}

function get(userid: String): Promise<Tours> {
  return ToursModel.find({  })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(Tours: Tours): Promise<Tours> {
  const p = new ToursModel(Tours);
  return p.save();
}

function update(userid: String, Tours: Tours): Promise<Tours> {
    return new Promise((resolve, reject) => {
      ToursModel.findOneAndUpdate({ userid }, Tours, {
        new: true,
      }).then((Tours) => {
        if (Tours) resolve(Tours);
        else reject("Failed to update Tours");
      });
    });
  }

export default { index, get, create, update };