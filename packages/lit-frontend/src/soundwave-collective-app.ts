import { html } from "lit";
import { customElement } from "lit/decorators.js";

import update from "./update";

import routes from "./routes";

import './components/router';

import * as App from "./app";

@customElement('soundwave-collective-app')
class SoundwaveCollectiveApp extends App.Main {
  constructor() {
    super(update);
  }

  render() {
    return html`
    <vaadin-router .routes=${routes}></vaadin-router>
    `;
  }
}