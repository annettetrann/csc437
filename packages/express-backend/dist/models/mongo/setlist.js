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
var setlist_exports = {};
__export(setlist_exports, {
  default: () => setlist_default
});
module.exports = __toCommonJS(setlist_exports);
var import_mongoose = require("mongoose");
const tourSchema = new import_mongoose.Schema(
  // step 1
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
    }
  },
  { collection: "setlist" }
);
const SetListModel = (0, import_mongoose.model)("SetList", tourSchema);
var setlist_default = SetListModel;
