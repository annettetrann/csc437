// src/models/mongo/setlist.ts
import { Schema, Model, Document, model } from "mongoose";
import { SetList } from "ts-models";

const tourSchema = new Schema<SetList>( // step 1
  {
    song: { 
      type: String, 
      required: true, 
      trim: true 
    },
    spotifyurl: { 
      type: String, 
      trim: true 
    },
    tourname: { 
        type: String, 
        trim: true 
    },
    tourdate: { 
    type: String, 
    trim: true 
    },
  },
  { collection: "setlist" }
);

const SetListModel = model<SetList>("SetList", tourSchema);

export default SetListModel;
