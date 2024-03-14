import { consume, createContext, provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import * as MVU from "./mvu";
import { MsgType } from "./mvu";
import { Profile, Artist, Tours } from "../../ts-models/src"; // step 1

export interface Model {
  profile?: Profile;
  artistList: Artist[]; // step 2
  toursList: Tours[];
}


export const context = createContext<Model>("BlazingModel");

export const init: Model = {
    profile: JSON.parse(localStorage.getItem("profile") || "{}"),
    artistList: [], // step 3
    toursList: []
};

export interface ProfileSaved extends MsgType<"ProfileSaved"> {
  userid: string;
  profile: {};
}

export interface ProfileRequested extends MsgType<"ProfileRequested"> {
  userid: string;
}

export interface ArtistListRequested extends MsgType<"ArtistListRequested"> {
} // step 4

export interface ToursListRequested extends MsgType<"ArtistListRequested"> {
} 

// step 5 (Go to update.ts)
export type Message =
   | ProfileRequested
   | ProfileSaved
   | ArtistListRequested
   | ToursListRequested;

export class Main
  extends MVU.Main<Model, Message>
  implements MVU.App<Model, Message>
{
  @provide({ context })
  @state()
  model = init;

  constructor(update: MVU.Update<Model, Message>) {
    super(
      update,
      () => this.model,
      (next: Model) => (this.model = next)
    );
  }
}

export class View extends MVU.View<Message> {
  @consume({ context: context, subscribe: true })
  @property({ attribute: false })
  _model: Model | undefined;

  getFromModel<T>(key: keyof Model) {
    if (this._model) {
      return this._model[key] as T;
    }
  }
}

export const createDispatch = () =>
  new MVU.Dispatch<Model, Message>();

export const updateProps = MVU.updateProps<Model>;
export const noUpdate = MVU.noUpdate<Model>;