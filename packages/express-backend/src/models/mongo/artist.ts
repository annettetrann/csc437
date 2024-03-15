// src/models/mongo/profile.ts
import { Schema, Model, Document, model } from "mongoose";
import { Artist } from "ts-models";

const artistSchema = new Schema<Artist>( // step 1
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
  },
  { collection: "artists" }
);

const ArtistModel = model<Artist>("Artist", artistSchema);

export default ArtistModel;
