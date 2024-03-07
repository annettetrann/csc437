import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("sort-bar")
class SortBar extends LitElement {
    @property({type: String})
    sortType: string = "";

    sortAlphabetically() {
        this.artists.sort((a, b) => a.name.localeCompare(b.name));
        this.requestUpdate();
    }

    render() {
        return html`
        <div class="sort">
            <button @click="${this.sortAlphabetically}">Sort Alp</button>
        </div>
        `;
    }

    static styles = css`
    .sort{
        display: block;
        justify-content: flex-end;
        margin: 1rem;
    }
    `;
}