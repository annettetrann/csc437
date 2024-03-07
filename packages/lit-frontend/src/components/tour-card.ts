import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("tour-card")
class TourCard extends LitElement {
    @property({ type: String})
    name: string = "";
    
    @property({ type: String})
    tourPicPath: string = "";

    
    render() {
        return html`
        <div class="card">
            <span class="tourImage">
                <slot name="tourImage">
            </span>
            <h3>
                <slot name="tourName">Tour Name</slot>
            </h3>
            <h4>
                <slot name="artistName">Artist Name</slot>
            </h4>
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