import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("tour-date")
class TourDate extends LitElement {
    @property({ type: String})
    date: string = "";
    
    @property({ type: String})
    location: string = "";
    
    @property({ type: Array})
    artist: string = "";

    
    render() {
        return html`
        <div class="card">
            <h2>
                <slot name="tourDate">January 1, 2024</slot>
            </h2>
            <slot name="genres">${this.genres.map((genre) => html`<dd>${genre}</dd>`)}></slot>
        </card>
    `;
}
    
static styles = css`
    :host {
        display: block;
        height: 100%;
        width: auto;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.5);
    }

    label {
        cursor: pointer;
    }
    
    img {
        width: 100%;
        border-radius: var(--size-corner-medium);
    }
    `;

}