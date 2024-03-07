import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("tourInfo-card")
class TourInfoCard extends LitElement {
    @property({ type: String})
    name: string = "";
    
    @property({ type: String})
    tourPicPath: string = "";

    
    render() {
        return html`
        <div class="card">
            <h3>
                <slot name="tourDate">Date</slot>
            </h3>
            <h4>
                <slot name="tourLocation">City, State</slot>
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
    `;

}