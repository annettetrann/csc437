import { customElement, property } from 'lit/decorators.js';
import * as App from '../app';
import { html, css } from 'lit';
import '../components/artist-list';
import '../components/user-panel';
import '../components/drop-down';
import '../components/toggle-switch';
import '../components/page-header';


// import { Profile } from "../ts-models";
import { Profile, Artist } from '../../../ts-models/src';

const pageCSS = css`/* * {
    box-sizing: border-box;
} */
header {
    /* background-color: var(--color-header-background); */
    overflow: visible;
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    gap: 2rem;
}

.header_logo {
    width: 128px;
    aspect-ratio: 1;
    scale: 150%;
    fill: currentColor;
}

.hero {
    position: relative;
    -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp));
    /* color: var(--color-mode-opp); */
    font-family: var(--font-family-headers);
    margin-bottom: 75px;
}

.header-hero {
    position: relative;
    color: var(--color-mode-light-accent);
    font-family: var(--font-family-headers);
    margin-bottom: 5px;
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 5px;
}

.header-hero>a:visited {
    opacity: 0;
    color: var(--color-mode-light-accent);
    line-height: 0;
    /* -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp)); */
    /* color: var(--color-mode-opp); */
    /* margin-bottom: px; */
}

.header-hero h3{
    font-family: var(--font-family-headers);
    color: var(--color-mode-light-accent);
    line-height: 0;
    margin-top: 5px;
}


.header a.active {
    background-color: var(--color-header-a-active);
    color: white;
}



.hero span {
    display: inline-block;
    color: var(--color-mode-light-accent);
    font-size: var(--font-size-regular);
    font-size: 5.5rem;
    font-family: vars(--font-family-headers);

}

body{
    background-color: var(--color-background-main);
    background-image: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    background: var(--color-background-main);
    background: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    font-family: var(--font-family-body);
    font-size: var(--font-size-body);
    vertical-align: baseline;
    text-align: center;
    font-weight: 500;
}


.page {
    display: flex;
    flex-basis: 100%;
    overflow: auto;
    margin: 0;
    padding: var(--size-spacing-medium);
}


h1, h2, h3, h4, h5, h6{
    /* background-color:#121212; */
    color: var(--color-header-text-color);
    line-height: 2;
    text-align: center;
    border: white;
    font-family: vars(--font-family-headers);
}

img {
    /* display: block; */
    /* height: 20vh; */
    width: 100%;
}

/*title fonts: Bebas Neue*/
.bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
  } 
h1{
    align-items: left;
    line-height: 1;
    color: var(--color-header-text-color);
    font-size: var(--font-size-large);
    letter-spacing: 0.50rem;
    vertical-align: baseline;
}
h2{
    font-size: var(--font-size-regular);
    background-color: var(--color-h2-background);
}
h3{
    color: var(--color-h3-text);
    font-size: var(--font-size-small);
}
h4{
    font-size: 1.25rem;
    background-color:rgba(255 255 255 / 75%);
    color: black;
}
h5{
    font-size: var(--font-size-body);
}
h6{
    font-size: var(--font-size-body);
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
svg.header_icon {
    display: inline;
    height: 5.5rem;
    aspect-ratio: 1.25;
    vertical-align: center;
    fill: var(--color-header-text-color);

}
svg.account_icon {
    float: right;
    display: inline;
    height: 6rem;
    width: 6rem;
    scale: 0.60;
    fill: var(--color-header-text-color);

}

li{
    font-size: var(--font-size-body);
    color: var(--color-mode-opp);
}

nav {
    color: var(--color-nav-active-color);
    z-index: 1;
}
a:link{
    color: var(--color-mode-opp);
}
a:visited{
    color: var(--color-accent);
}
a:hover{
    color:var(--color-accent) ;
}
a:active{
    color: var(--color-light-tan);
}


/* body font: PT Sans */
.red-hat display-body {
    font-family: "Red Hat Display", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  
.user-dropdown > ul {
    padding-left: 20%;
    padding-right:20%;
    z-index: 1;
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.user-dropdown a:link {
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.setlist-bg {
    background-color: var(--color-h3-background);
    color: var(--color-mode-main);
}


/* headers */


`

@customElement('index-page')
class IndexView extends App.View {
  constructor() {
    super();
  }

  static styles = pageCSS;

  @property()
  get profile() {
    return this.getFromModel<Profile>('profile');
  }

  @property()
  get artistList() {
    return this.getFromModel<Artist[]>('artistList'); // step 8
  }

  connectedCallback(): void { //step 9
    super.connectedCallback();
    this.dispatchMessage({ type: "ArtistListRequested" }); // step 9
  
  }

  render() {
    return html`
        <nav aria-label="breadcrumb">
            Home
        </nav>
        <header>
            <drop-down>
                <svg class="account_icon">
                    <use href="/icons/symbols.svg#icon-profile" />
                </svg>
                <user-panel 
                    slot="menu" 
                    class="user-dropdown">
                    <span slot="name">${this.profile.name}</span>
                </user-panel>
            </drop-down>
        </header>
        <article>
        <div class="hero">
            <span>SOUNDWAVE COLLECTIVE</span>
        </div>
        <h2>Artists</h2>
        <artist-list .artists=${this.artistList}></artist-list>
        </article>`;
  }
}