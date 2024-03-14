import { JSONRequest } from "./rest";
import * as App from "./app";
import { Profile, Artist, Tours } from "../ts-models";

const dispatch = App.createDispatch();

dispatch.addMessage("ProfileRequested", (msg: App.Message) => {
  const { userid } = msg as App.ProfileRequested;

  return new JSONRequest({})
    .get(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("ProfileSaved", (msg: App.Message) => {
  const { userid, profile } = msg as App.ProfileSaved

  return new JSONRequest(profile)
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) => {
      localStorage.setItem("profile", JSON.stringify(profile));
      return profile ? App.updateProps({ profile }) : App.noUpdate
  });
});


async function removeLaterArtistList() { // TODO: REMOVE
  return [
    {
        name: "ODESZA",
        image: "/images/artist_odesza.jpeg"
    },
    {
        name: "Fred Again...",
        image: "/images/artist_fredagain.jpeg"
    },
    {
        name: "David Guetta",
        image: "/images/artists_davidguetta.jpeg"
    },
    {
        name: "Calvin Harris",
        image: "/images/artists_calvinharris.jpeg"
    }
]
}

dispatch.addMessage("ArtistListRequested", (msg: App.Message) => {
  return removeLaterArtistList()
  .then((artistList: Artist[]) => App.updateProps({ artistList })); // step 7 (REMOVE LATER< UNCOMMENT BELOW)
}); // step 6


async function removeLaterToursList() {
  return [
    {
      name: "The Last Goodbye (2023)",
      image: "/images/tours_odesza_thelastgoodbye.png"
    },
    {
        name: "In Return (2015)",
        image: "/images/tours_odesza_inreturn.jpeg"
    }

  ]
}

dispatch.addMessage("ToursListRequested", (msg: App.Message) => {
  return removeLaterToursList()
  .then((toursList: Tours[]) => App.updateProps({ toursList })); // step 7 (REMOVE LATER< UNCOMMENT BELOW)
});
export default dispatch.update;