import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("song-card")
class SongCard extends LitElement {
    @property({ type: String})
    song: string = "";
    
    
    @property({ type: String})
    spotifyUrl: string = "";

    
    render() {
        return html`
        <div class="tourinfo">
            <h2>
                <slot name="songName">Song</slot>
            </h2>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7tRXTDi87CiAqU5sIBQfIC?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <a href="/setlist/">
                    <button class="tour-city">
                        <slot name="tourLocation">
                            City, State
                        </slot>
                    </button>
            </a>
        </card>
    `;
}
    
static styles = css`
    :host {
        display: block;
        height: 100%;
        width: auto;
        margin: 10px;
        border: 3px solid var(--color-mode-light-accent);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.2);
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
    

    `;

}