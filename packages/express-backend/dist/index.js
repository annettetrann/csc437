"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_mongoConnect = require("./mongoConnect");
var import_profiles = __toESM(require("./services/profiles"));
var import_artists = __toESM(require("./services/artists"));
var import_tours = __toESM(require("./services/tours"));
console.log("Connecting to MongoDB");
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
console.log("Connecting to MongoDB");
app.use((0, import_cors.default)());
app.use(import_express.default.json());
console.log("Connecting to MongoDB");
(0, import_mongoConnect.connect)("soundwavecollective");
app.get("/hello", (req, res) => {
  res.send("Hello, World");
});
app.get("/api/profiles/:userid", (req, res) => {
  const { userid } = req.params;
  import_profiles.default.get(userid).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.post("/api/profiles", (req, res) => {
  const newProfile = req.body;
  import_profiles.default.create(newProfile).then((profile) => res.status(201).send(profile)).catch((err) => res.status(500).send(err));
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.put("/api/profiles/:userid", (req, res) => {
  const { userid } = req.params;
  const newProfile = req.body;
  console.log(newProfile, userid);
  import_profiles.default.update(userid, newProfile).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.post("/api/login", (req, res) => {
});
app.get("/api/artists", (req, res) => {
  import_artists.default.index().then((list) => res.json(list));
});
app.get("/api/tours/:artistname", (req, res) => {
  const { artistname } = req.params;
  import_tours.default.index(artistname).then((list) => res.json(list));
});
