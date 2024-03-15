"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var artist_exports = {};
__export(artist_exports, {
  default: () => artist_default
});
module.exports = __toCommonJS(artist_exports);
var import_mongoose = require("mongoose");
const artistSchema = new import_mongoose.Schema(
  // step 1
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      trim: true
    }
  },
  { collection: "artists" }
);
const ArtistModel = (0, import_mongoose.model)("Artist", artistSchema);
var artist_default = ArtistModel;
