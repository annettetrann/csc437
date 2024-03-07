import { css, html, LitElement, unsafeCSS} from "lit";
import {customElement, property } from "lit/decorators.js";
import { Profile } from "../ts-models";
import * as App from "../src/app";
import { serverPath } from "./rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property({ attribute: false })
  using?: Profile;

  get profile() {
    return this.using || ({} as Profile);
  }
  
  render() {
    const {
      userid,
      name,
      nickname,
      city,
      genres = []
    } = this.profile;

    const renderGenre = (s: string) => html`<dd>${s}</dd>`;

    return html`
      <section>
        ${this._renderAvatar()}
        <h1>${name}</h1>
        <dl>
          <dt>Username</dt>
          <dd>${userid}</dd>
          <dt>Nickname</dt>
          <dd>${nickname}</dd>
          <dt>Home City</dt>
          <dd>${city}</dd>
          <dt>Genres</dt>
          ${genres.map(renderGenre)}
        </dl>
      </section>
    `;
  }

  _renderAvatar() {
    const { name, nickname, avatar, color } = (this.profile ||
      {}) as Profile;
    const avatarImg = avatar
      ? html`<img id="avatarImg" src="${avatar}" />`
      : (nickname || name || " ").slice(0, 1);
    const colorStyle = color
      ? `--avatar-backgroundColor: ${color}`
      : "";

    return html` <div class="avatar" style=${colorStyle}>
      ${avatarImg}
    </div>`;
  }

  static styles = [
    css`
      :host {
        --avatar-backgroundColor: var(--color-accent);
        --avatar-size: 100px;
        padding: var(--size-spacing-medium);
      }
      section {
        display: grid;
        grid-template-columns: [key] 1fr [value] 2fr [end];
        gap: var(--size-spacing-xlarge);
        align-items: end;
      }
      h1 {
        grid-column: value;
      }
      dl {
        display: grid;
        grid-column: key / end;
        grid-template-columns: subgrid;
        gap: 0 var(--size-spacing-xlarge);
        align-items: baseline;
      }
      dt {
        grid-column: key;
        justify-self: end;
        color: var(--color-accent);
        font-family: var(--font-family-display);
      }
      dd {
        grid-column: value;
      }
      .avatar {
        grid-column: key;
        justify-self: end;
        position: relative;
        width: var(--avatar-size);
        aspect-ratio: 1;
        background-color: var(--avatar-backgroundColor);
        border-radius: 50%;
        text-align: center;
        line-height: var(--avatar-size);
        font-size: calc(0.66 * var(--avatar-size));
        font-family: var(--font-family-display);
        color: var(--color-link-inverted);
        overflow: hidden;
      }
      .name {
        width: 100%;
        font-family: var(--font-family-display);
        color: var(--color-accent);
      }
      img {
        width: 100%;
      }
    `
  ];

  // _fetchData(path: string) {
  //   fetch(serverPath(path))
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       }
  //       return null;
  //     })
  //     .then((json: unknown) => {
  //       this.profile = json as Profile;
  //     });
  // }
}

@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  @property()
  userid: string = JSON.parse(localStorage.getItem("profile") ??  "{}").userid;


  @property()
  profile?: Profile = {}; //JSON.parse(localStorage.getItem("profile") ??  "{}");

  connectedCallback(): void {
    super.connectedCallback();
    this.getUserProfile();
  }

  async getUserProfile() {
    // const userid = 'annette';
    fetch(`http://127.0.0.1:3000/api/profile/${this.userid}/`).then(async (response) => {
      this.profile = await response.json();
    });
  }

  render() {
    const {
      userid,
      name,
      nickname,
      city,
      genres = []
    } = this.profile;

    console.log("Rendering form", this.profile);

    return html`
      <section>
        <form @submit=${this._handleSubmit}>
          <dl>
            <dt>Username</dt>
            <dd><input name="userid" .value=${userid} /></dd>
            <dt>Avatar</dt>
            <dd
              ><input
                name="avatar"
                type="file"
                @change=${this._handleAvatarSelected}
            /></dd>
            <dd>${this._renderAvatar()}</dd>
            <dt>Name</dt>
            <dd><input name="name" .value=${name} /></dd>
            <dt>Nickname</dt>
            <dd
              ><input name="nickname" .value=${nickname}
            /></dd>
            <dt>Home City</dt>
            <dd><input name="city" .value=${city} /></dd>
            <dt>Genres</dt>
            <dd
              ><input
                name="genres"
                .value=${genres.join(", ")}
            /></dd>
          </dl>
          <button type="submit">Submit</button>
        </form>
      </section>
    `;
  }

  static styles = [
    ...UserProfileElement.styles,
    css`
      form {
        display: contents;
      }
      button {
        grid-column: value;
        width: 10em;
      }
      input {
        font: inherit;
      }
    `
  ];

  _handleAvatarSelected(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const selectedFile = (target.files as FileList)[0];
    const reader: Promise<string> = new Promise(
      (resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result as string);
        fr.onerror = (err) => reject(err);
        fr.readAsDataURL(selectedFile);
      }
    );

    // reader.then((result: string) => {
    //   this.profile = {
    //     ...(this.profile as Profile),
    //     avatar: result
    //   };
    // });
    reader
      .then
      //     (result: string) => {
      //       this.profile = {
      //   ...(this.profile as Profile),
      //   avatar: result
      // };
      ();
  }

  _handleSubmit(event: Event) {
    event.preventDefault(); // prevent browser from submitting form data itself

    if (this.profile) {
      console.log("Profile", this.profile);
      
      const target = event.target as HTMLFormElement;
      console.log(target);
      const formdata = new FormData(target);
      let entries = Array.from(formdata.entries())
        .map(([k, v]) => (v === "" ? [k] : [k, v]));

      const json = Object.fromEntries(entries);

      console.log("Submitting Form", json);
      localStorage.setItem("profile", JSON.stringify(json));

      // const data = {
      //   "userid":"annette",
      //   "name":"Annette Tran",
      //   "city":"Oakland, CA",
      //   "genres":["edm","alternative"],
      // }

      fetch(`http://127.0.0.1:3000/api/profiles/${json.userid}/`, {
        method: "PUT",
        body: JSON.stringify(json),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(async (response) => {
        console.log(await response.json())
      });;


// app.put("/api/profiles/:userid", (req: Request, res: Response) => {
//   const { userid } = req.params;
//   const newProfile = req.body;

//   profiles
//     .update(userid, newProfile)
//     .then((profile: Profile) => res.json(profile))
//     .catch((err) => res.status(404).end());
// });




      // const dispatch = App.createDispatch();
      // dispatch.addMessage('ProfileSaved', (message: any) => {
      //   console.log("ProfileSaved", message);
      // });
      // const msg: App.ProfileSaved = {
      //   type: "ProfileSaved",
      //   userid: this.profile?.userid,
      //   profile: json as Profile
      // };
      // const ev = new CustomEvent("mvu:message", {
      //   bubbles: true,
      //   composed: true,
      //   detail: msg
      // });
      // dispatch.addMessage(ev);
    }
  }


//   _handleSubmit(event: Event) {
//     event.preventDefault(); // prevent browser from submitting form data itself

//     if (this.profile) {
//       // const avatar = this.profile?.avatar;
//       const target = event.target as HTMLFormElement;
//       const formdata = new FormData(target);
//       let entries = Array.from(formdata.entries())
//         .map(([k, v]) => (v === "" ? [k] : [k, v]))
//         .map(([k, v]) =>
//           k === "airports"
//             ? [k, (v as string).split(",").map((s) => s.trim())]
//             : [k, v]
//         );

//       // if (avatar) entries.push(["avatar", avatar]);

//       const json = Object.fromEntries(entries);

//       console.log("Submitting Form", json);

//       const msg: App.ProfileSaved = {
//         type: "ProfileSaved",
//         userid: this.profile?.userid,
//         profile: json as Profile
//       };
//       const ev = new CustomEvent("mvu:message", {
//         bubbles: true,
//         composed: true,
//         detail: msg
//       });
//       this.dispatchEvent(ev);
//     }
//   }
// }

  // _putData(json: Profile) {
  //   fetch(serverPath(this.path), {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(json)
  //   })
  //     .then((response) => { //if response comes back, then populate json
  //       if (response.status === 200) {
  //         return response.json();
  //       }
  //       return null;
  //     })
  //     .then((json: unknown) => { //if the json exists 
  //       if (json) {
  //         console.log("PUT request successful:", json);
  //         this.profile = json as Profile;
  //       }
  //     })
  //     .catch((err) =>
  //       console.log("Failed to POST form data", err)
  //     );
  // }
}