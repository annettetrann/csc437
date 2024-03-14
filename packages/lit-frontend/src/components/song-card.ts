import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("song-card")
class SongCard extends LitElement {
    @property({ type: String})
    song: string = "";
    
    
    @property({ type: String})
    spotifyurl: string = "";

    
    render() {
        return html`
        <div class="songcard">
            <h4>
                <slot name="songname">Song</slot>
            </h4>
            <iframe style="border-radius:12px" src=${this.spotifyurl} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
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

    .songcard > h4 {
        margin: 0.2rem;
    }

    `;

}