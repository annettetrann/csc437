import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

// import { Tour } from "ts-models";

@customElement("tourinfo-card")
class TourInfoCard extends LitElement {
    @property({ type: String})
    date: string = "";
    
    @property({ type: String})
    location: string = "";

    @property({type: String})
    tourname: string = "";
    
    //<a href="/setlist/${encodeURIComponent(tourinfo.tourname)}/${encodeURIComponent(tourinfo.date)}/">
    
    render() {
        return html`
        <div class="tourinfo">
            <h3>
                <slot name="tourDate">Date</slot>
            </h3>
            <a href="/setlist/${encodeURIComponent(this.tourname)}/${encodeURIComponent(this.date)}/">
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

    .tour-city {
        border: 3px solid var(--color-hot-pink);
        text-align: center;
        color: var(--color-hot-pink);
        margin: 4px 2px;
        padding: 15px 32px;
        font-size: var(--font-size-body);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.75);
        /* opacity: 0.50; */
        border-radius: 10px 10px 10px 10px;
        font-family: var(--font-family-headers);
    }
    
    .tour-city:hover {
        background-color: var(--color-hot-pink);
        color: var(--color-lightpink-white);
    }
    
    .tour-city > a {
        text-decoration: none;
        color: var(--color-dark-purple);
    }
    
    .tourinfo > h3{
        color: var(--color-mode-opp);
    }


    `;

}