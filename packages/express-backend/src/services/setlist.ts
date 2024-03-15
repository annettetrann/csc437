import { Document } from "mongoose";
import { SetList } from "ts-models";
import SetListModel from "../models/mongo/setlist";

 // step 2: create this file
function index(tourname: string, tourdate: string): Promise<SetList[]> {
  return SetListModel.find({ tourname: tourname, tourdate: tourdate})
    .then((list) => list)
    .catch((err) => {
        throw `${tourdate} Not Found`;
      });
}

function get(userid: String): Promise<SetList> {
  return SetListModel.find({  })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(SetList: SetList): Promise<SetList> {
  const p = new SetListModel(SetList);
  return p.save();
}

function update(userid: String, SetList: SetList): Promise<SetList> {
    return new Promise((resolve, reject) => {
      SetListModel.findOneAndUpdate({ userid }, SetList, {
        new: true,
      }).then((SetList) => {
        if (SetList) resolve(SetList);
        else reject("Failed to update SetList");
      });
    });
  }

export default { index, get, create, update };