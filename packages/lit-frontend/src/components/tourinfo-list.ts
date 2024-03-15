import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './tourinfo-card';
import { Tour } from "ts-models";

@customElement("tourinfo-list")
class TourInfoList extends LitElement {
    @property({ type: Array})
    tourInfo: Tour[] = [];

    sortAlphabetically() {
        this.tourInfo.sort((a, b) => a.location.localeCompare(b.location));
        this.requestUpdate();
  }

    renderTourInfo(tourinfo: Tour) {
        console.log(`/setlist/${encodeURIComponent(tourinfo.tourname)}/${encodeURIComponent(tourinfo.date)}/`)
        return html`<a href="/setlist/${encodeURIComponent(tourinfo.tourname)}/${encodeURIComponent(tourinfo.date)}/">
                <tourinfo-card class="tourinfo-card">
                    <span slot="tourDate">${tourinfo.date}</span>
                    <span slot="tourLocation">${tourinfo.location}</span> 
                    
                </tourinfo-card>
            </a> `
    }

    render() {
        console.log(this.tourInfo, "####")
        return html`
        <section>
            <div class="sort">
                <button @click="${this.sortAlphabetically}">Sort Alp</button>
            </div>
            <div class="tourinfo">
            ${this.tourInfo.map((tour) => this.renderTourInfo(tour))}
            </div>
        </section>`
    }

    static styles = css`
    .tours{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0 4 rem;
        align-items: baseline;
        align-content: space-around;
        justify-content: space-evenly;
        column-gap: 1rem;
    }
    .tour{
        display: block;
        height: 20vh;
        width: auto;
    }
    
    .tour-card{
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

    `
}