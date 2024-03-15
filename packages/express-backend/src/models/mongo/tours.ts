// src/models/mongo/profile.ts
import { Schema, Model, Document, model } from "mongoose";
import { Tours } from "ts-models";

const toursSchema = new Schema<Tours>( // step 1
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },
    image: { 
      type: String, 
      trim: true 
    },
    artist: { 
        type: String, 
        trim: true 
      },
  },
  { collection: "tours" }
);

const ArtistModel = model<Tours>("Tours", toursSchema);

export default ArtistModel;
