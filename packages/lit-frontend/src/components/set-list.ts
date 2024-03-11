import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './song-card';

@customElement("set-list")
class SetList extends LitElement {
    @property({ type: Array})
    songs = [];

    // sortAlphabetically() {
    //     this.tourLocations.sort((a, b) => a.location.localeCompare(b.location));
    //     this.requestUpdate();
    // }

    renderSong(songs) {
        console.log(songs.spotifyurl)
        return html`
                <song-card class="song-card" spotifyurl=${songs.spotifyurl}>
                    <span slot="songname">${songs.song}</span>
                </song-card>`
    }
    

    render() {
        console.log(this.songs, "####")
        return html`
        <section>
            ${this.songs.map((song) => this.renderSong(song))}
        </section>`
    }

    static styles = css`
    .host{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0 4 rem;
        align-items: baseline;
        align-content: space-around;
        justify-content: space-evenly;
        column-gap: 1rem;
    }
    .setlist{
        display: block;
        height: 20vh;
        width: auto;
    }
    
    .song-card{
        border: 3px solid var(--color-mode-light-accent);
        text-align: center;
        color: white;
        margin: 4px 2px;
        padding: 15px 32px;
        font-size: var(--font-size-small);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 10px 10px 10px 10px;
        font-family: var(--font-family-headers);
    
    }

    .sort {
        display: flex;
        justify-content: flex-left;
    }

    .sort > button {
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid var(--color-mode-light-accent);
        border-radius: 3px;
        background-color: var(--color-mode-lw);
        color: var(--color-mode-light-accent);
        cursor: pointer;
    }

    .sort > button:hover {
        background-color: var(--color-mode-light-accent);
        color: white;
    }

    img {
        width: 100%;
    }

    label {
        cursor: pointer;
    }

    .setlist {
        display: grid;
        align-items: baseline;
        vertical-align: auto;
    }
    
    .setlist > header {
        flex-basis: min-content;
    }
    
    .setlist > li {
        color: var(--color-mode-opp);
    }
    
    .setlist-bg {
        background-color: var(--color-h3-background);
        color: var(--color-mode-main);
    }

    `
}