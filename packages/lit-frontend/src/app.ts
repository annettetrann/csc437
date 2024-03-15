import { consume, createContext, provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import * as MVU from "./mvu";
import { MsgType } from "./mvu";
import { Profile, Artist, Tours, Tour, SetList } from "../../ts-models/src"; // step 1

export interface Model {
  profile?: Profile;
  artistList: Artist[]; // step 2
  toursList: Tours[];
  tourInfoList: Tour[];
  setList: SetList[];
}


export const context = createContext<Model>("BlazingModel");

export const init: Model = {
    profile: JSON.parse(localStorage.getItem("profile") || "{}"),
    artistList: [], // step 3
    toursList: [],
    tourInfoList: [],
    setList: []
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

export interface ToursListRequested extends MsgType<"ToursListRequested"> {
  name: string; // STEP f - 1
}

export interface TourInfoListRequested extends MsgType<"TourInfoListRequested"> {
  name: string;
} 

export interface SetListRequested extends MsgType<"SetListRequested"> {
  name: string;
  date: string;
} 

// step 5 (Go to update.ts)
export type Message =
   | ProfileRequested
   | ProfileSaved
   | ArtistListRequested
   | ToursListRequested
   | TourInfoListRequested
   | SetListRequested;

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