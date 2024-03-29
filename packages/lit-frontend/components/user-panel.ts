import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ToggleSwitchElement } from "./toggle-switch";
import { PresetButtonsElement } from "./preset-buttons";

@customElement("user-panel")
export class UserPanelElement extends LitElement {
  @property()
  avatar: string = "";

  render() {
    return html`
      <ul>
        <li class="header">
          <img src=${this.avatar} />
          <h1><slot name="name">Your Name</slot></h1>
        </li>
        <li>
            <a href="profile.html">Profile</a>
        </li>
        <li>
          <toggle-switch @change=${this._toggleDarkMode}>
            Dark Mode
          </toggle-switch>
        </li>

        <slot></slot>
        <li>
          <slot name="logout">Sign out&hellip;</slot>
        </li>
        <li>
            <a href="signup.html">Sign Up</a>
        </li>
      </ul>
    `;
  }

  static styles = css`
    * {
      margin: 0.5;
      box-sizing: border-box;
      z-index: 1;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-page);
      color: var(--color-mode-light-accent);
      // border: 1px solid var(--color-accent);
      border-radius: var(--size-corner-medium);
      padding: var(--size-spacing-small);
      width: min-content;
      box-shadow: var(--shadow-dropdown);
      align-text: center;
    }
    li {
      white-space: nowrap;
      border-color: var(--color-mode-lw);
      border-width: var(--line-weight-superfine);
      padding: 0.5em;

    }
    li.header {
      display: flex;
      flex-wrap: nowrap;
      align-items: end;
      line-height: var(--font-line-height-display);
    }
    li:first-child {
      border-bottom-style: solid;
    }
    li:last-child {
      border-top-style: solid;
    }
    img {
      display: inline;
      height: var(--size-icon-large);
    }
    h1 {
      font-size: var(--size-type-mlarge);
      line-height: var(--font-line-height-display);
      white-space: normal;
      text-align: right;
    }
    a {
      color: var(--color-mode-light-accent);
    }
  `;

  _toggleDarkMode(ev: InputEvent) {
    const target = ev.target as ToggleSwitchElement;
    const body = document.body;

    console.log("Toggling Dark mode", ev);

    if (target?.on) body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }

  _selectFontSize(ev: InputEvent) {
    const target = ev.target as PresetButtonsElement;
    const body = document.body;

    console.log("Selecting Font Size", ev);

    if (target) {
      const fontSize = target.value
        ? target.value.toString() + "px"
        : "initial";
      body.style.fontSize = fontSize;
    }
  }
}