import { JSONRequest } from "./rest";
import * as App from "./app";
import { Profile, Artist, Tours, Tour, SetList} from "../ts-models";

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


async function removeLaterTourInfoList() {
  return [
    {
      date: "July 29th",
      location: "Seattle, WA"
    },
    {
        date: "July 30th",
        location: "Seattle, WA"
    },
    {
        date: "July 31st",
        location: "Seattle, WA"
    },
    {
        date: "August 17th",
        location: "Phoenix, AZ"
    },
    {
        date: "August 19th",
        location: "Austin, TX"
    },
    {
        date: "September 30th",
        location: "Santa Barbara, CA"
    }
  ]
};

dispatch.addMessage("TourInfoListRequested", (msg: App.Message) => {
  return removeLaterTourInfoList()
  .then((tourInfoList: Tour[]) => App.updateProps({ tourInfoList })); // step 7 (REMOVE LATER< UNCOMMENT BELOW)
});

async function removeLaterSetList() {
  return [
    {
      song: "This Version of You",
      spotifyurl: "https://open.spotify.com/embed/track/2h4IoIeRasKE7moH6zhHUO?utm_source=generator"
    },
    {
        song: "Behind the Sun",
        spotifyurl: "https://open.spotify.com/embed/track/7tRXTDi87CiAqU5sIBQfIC?utm_source=generator"
    },
    {
        song: "All We Need",
        spotifyurl: "https://open.spotify.com/embed/track/5jnp8E61wcoF6qIEtDHQnJ?utm_source=generator"
    },
    {
        song: "Love Letter/Something About You",
        spotifyurl: "https://open.spotify.com/embed/track/5p8QLRVnBk20xuvwiDZtTr?utm_source=generator"
    },
    {
        song: "Say My Name",
        spotifyurl: "https://open.spotify.com/embed/track/1LeItUMezKA1HdCHxYICed?utm_source=generator"
    },
    {
        song: "Late Night",
        spotifyurl: "https://open.spotify.com/embed/track/5Nu5Uyoauauy9LFePYL1Z3?utm_source=generator"
    },
    {
        song: "In the Rain",
        spotifyurl: "https://open.spotify.com/embed/track/0fR8y0bMqFn0mDdZoksk7N?utm_source=generator"
    },
    {
        song: "Heavier",
        spotifyurl: "https://open.spotify.com/embed/track/4JBRlhgxP6tkb31KCfM88R?utm_source=generator"
    }
  ]
}

dispatch.addMessage("SetListRequested", (msg: App.Message) => {
  return removeLaterSetList()
  .then((setList: SetList[]) => App.updateProps({ setList })); // step 7 (REMOVE LATER< UNCOMMENT BELOW)
});

export default dispatch.update;