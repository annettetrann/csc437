// src/models/mongo/profile.ts
import { Schema, Model, Document, model } from "mongoose";
import { Tour } from "ts-models";

const tourSchema = new Schema<Tour>( // step 1
  {
    date: { 
      type: String, 
      required: true, 
      trim: true 
    },
    location: { 
      type: String, 
      trim: true 
    },
    tourname: { 
        type: String, 
        trim: true 
    },
  },
  { collection: "tour" }
);

const TourModel = model<Tour>("Tour", tourSchema);

export default TourModel;
