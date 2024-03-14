import { html } from "lit";
import { customElement } from "lit/decorators.js";

// MVU App
import * as App from "../app";
import update from "../update";
import routes from "../routes";

import '../components/vaadin-router';
import '../components/auth-required';
import '../components/sw-header';



@customElement('soundwave-collective-app')
class SoundwaveCollectiveApp extends App.Main {
  constructor() {
    super(update);
  }

  render() {
    return html`
      <sw-header></sw-header>
      <vaadin-router .routes=${routes}></vaadin-router>
    
    `;
  }
}