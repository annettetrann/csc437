import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './artist-card';

@customElement("artist-list")
class ArtistList extends LitElement {
    @property({ type: Array})
    artists = [];

    sort() {
        this.artists.sort((a, b) => a.name.localeCompare(b.name));
        this.requestUpdate();
    }

    renderArtist(artist) {
        return html`<a href="tours.html">
                <artist-card class="artist-card">
                    <img slot="artistImage" src="${artist.image}"/>
                    <span slot="artistName">${artist.name}</span> 
                    
                </artist-card>
            </a> `
    }

    render() {
        return html`
        <section>
            <button @click="${this.sort}">Sort</button>
            <div class="artists">
            ${this.artists.map((artist) => this.renderArtist(artist))}
            </div>
        </section>`
    }

    static styles = css`
    .artists{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0 4 rem;
        align-items: baseline;
        align-content: space-around;
        justify-content: space-evenly;
        column-gap: 1rem;
    }
    .artist{
        display: block;
        height: 20vh;
        width: auto;
    }
    
    .artist-card{
        border: 3px solid var(--color-accent);
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

    img {
        width: 100%;
    }

    `
}