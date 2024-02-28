import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './tour-card';

@customElement("tour-list")
class TourList extends LitElement {
    @property({ type: Array})
    tours = [];

    sortAlphabetically() {
        this.tours.sort((a, b) => a.name.localeCompare(b.name));
        this.requestUpdate();
    }

    renderTour(tour) {
        return html`<a href="tour.html">
                <tour-card class="tour-card">
                    <img slot="tourImage" src="${tour.image}"/>
                    <span slot="tourName">${tour.name}</span>
                    <span slot="artistName">${tour.artistName}</span> 
                    
                </tour-card>
            </a> `
    }

    render() {
        return html`
        <section>
            <div class="sort">
                <button @click="${this.sortAlphabetically}">Sort Alp</button>
            </div>
            <div class="tours">
            ${this.tours.map((tour) => this.renderTour(tour))}
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