import { JSONRequest } from "./rest";
import * as App from "./app";
import { Profile, Artist, Tours, Tour, SetList} from "ts-models";

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

dispatch.addMessage("ArtistListRequested", (msg: App.Message) => {
  return new JSONRequest({})
    .get(`/artists`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        return json as Artist[];
      }
      return undefined;
    })
    .then((artistList: Artist[] | undefined) => {
      return artistList ? App.updateProps({ artistList }) : App.noUpdate
  });
}); // step 6

dispatch.addMessage("ToursListRequested", (msg: App.Message) => {
  const { name } = msg as App.ToursListRequested;
  return new JSONRequest({})
    .get(`/tours/${name}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        return json as Tours[];
      }
      return undefined;
    })
    .then((toursList: Tours[] | undefined) => {
      return toursList ? App.updateProps({ toursList }) : App.noUpdate
  });
});


async function removeLaterTourInfoList(): Promise<Tour[]> {
  return [
    {
      date: "July 29th",
      location: "Seattle, WA",
      tourname: "",
    },
    {
        date: "July 30th",
        location: "Seattle, WA",
        tourname: "",
    },
    {
        date: "July 31st",
        location: "Seattle, WA",
        tourname: "",
    },
    {
        date: "August 17th",
        location: "Phoenix, AZ",
        tourname: "",
    },
    {
        date: "August 19th",
        location: "Austin, TX",
        tourname: "",
    },
    {
        date: "September 30th",
        location: "Santa Barbara, CA",
        tourname: "",
    }
  ]
};

dispatch.addMessage("TourInfoListRequested", (msg: App.Message) => {

  const { name } = msg as App.TourInfoListRequested;

  return new JSONRequest({})
    .get(`/tours/get/${name}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        return json as Tour[];
      }
      return undefined;
    })
    .then((tourInfoList: Tour[] | undefined) => {
      return tourInfoList ? App.updateProps({ tourInfoList }) : App.noUpdate
  });
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
  const { name, date } = msg as App.SetListRequested;
  return new JSONRequest({})
    .get(`/setlist/${name}/${date}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        return json as SetList[];
      }
      return undefined;
    })
    .then((setList: SetList[] | undefined) => {
      return setList ? App.updateProps({ setList }) : App.noUpdate
  });
});

export default dispatch.update;