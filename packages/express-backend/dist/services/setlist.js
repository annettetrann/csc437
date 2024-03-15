"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var setlist_exports = {};
__export(setlist_exports, {
  default: () => setlist_default
});
module.exports = __toCommonJS(setlist_exports);
var import_setlist = __toESM(require("../models/mongo/setlist"));
function index(tourname, tourdate) {
  return import_setlist.default.find({ tourname, tourdate }).then((list) => list).catch((err) => {
    throw `${tourdate} Not Found`;
  });
}
function get(userid) {
  return import_setlist.default.find({}).then((list) => list[0]).catch((err) => {
    throw `${userid} Not Found`;
  });
}
function create(SetList2) {
  const p = new import_setlist.default(SetList2);
  return p.save();
}
function update(userid, SetList2) {
  return new Promise((resolve, reject) => {
    import_setlist.default.findOneAndUpdate({ userid }, SetList2, {
      new: true
    }).then((SetList3) => {
      if (SetList3)
        resolve(SetList3);
      else
        reject("Failed to update SetList");
    });
  });
}
var setlist_default = { index, get, create, update };
