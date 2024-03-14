import { customElement, property } from 'lit/decorators.js';
import * as App from '../app';
import { html, css } from 'lit';
import '../components/user-panel';
import '../components/drop-down';
import '../components/song-card';
import '../components/set-list';

import { Profile, SetList } from "../../../ts-models/src";

const pageCSS = css`
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

    .setlist {
        display: grid;
        align-items: baseline;
        vertical-align: auto;
    }
    
    .setlist > header {
        flex-basis: min-content;
    }
    
    .setlist > li {
        color: var(--color-mode-opp);
    }
    
    .setlist-bg {
        background-color: var(--color-h3-background);
        color: var(--color-mode-main);
    }
    

`;

@customElement('setlist-page')
class SetListView extends App.View {
    constructor() {
        super();
      }
    
    static styles = pageCSS;

    @property()
    get profile() {
        return this.getFromModel<Profile>('profile');
    }

    @property()
    get setList() {
        return this.getFromModel<SetList>('setList');
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.dispatchMessage({ type: "SetListRequested" });
    }

    // getSetList() {
    //     const songs = [
    //         {
    //             song: "This Version of You",
    //             spotifyurl: "https://open.spotify.com/embed/track/2h4IoIeRasKE7moH6zhHUO?utm_source=generator"
    //         },
    //         {
    //             song: "Behind the Sun",
    //             spotifyurl: "https://open.spotify.com/embed/track/7tRXTDi87CiAqU5sIBQfIC?utm_source=generator"
    //         },
    //         {
    //             song: "All We Need",
    //             spotifyurl: "https://open.spotify.com/embed/track/5jnp8E61wcoF6qIEtDHQnJ?utm_source=generator"
    //         },
    //         {
    //             song: "Love Letter/Something About You",
    //             spotifyurl: "https://open.spotify.com/embed/track/5p8QLRVnBk20xuvwiDZtTr?utm_source=generator"
    //         },
    //         {
    //             song: "Say My Name",
    //             spotifyurl: "https://open.spotify.com/embed/track/1LeItUMezKA1HdCHxYICed?utm_source=generator"
    //         },
    //         {
    //             song: "Late Night",
    //             spotifyurl: "https://open.spotify.com/embed/track/5Nu5Uyoauauy9LFePYL1Z3?utm_source=generator"
    //         },
    //         {
    //             song: "In the Rain",
    //             spotifyurl: "https://open.spotify.com/embed/track/0fR8y0bMqFn0mDdZoksk7N?utm_source=generator"
    //         },
    //         {
    //             song: "Heavier",
    //             spotifyurl: "https://open.spotify.com/embed/track/4JBRlhgxP6tkb31KCfM88R?utm_source=generator"
    //         }
    //     ]
    //     return songs;
    // }

    render() {
        return html`
        <article class="Set List">
        <nav aria-label="breadcrumb">
            <a href="index.html">Home</a> &gt;
            <a href="tours.html">ODESZA</a> &gt;
            <a href="tour.html">The Last Goodbye (2023)</a> &gt;
            Set List
        </nav>
        <header>
            <div class="header-hero">
                <a href="index.html">
                    <h3>SOUNDWAVE</h3>
                    <h3>COLLECTIVE</h3>
                </a>
            </div>  
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
        <!-- <h1>SetList</h1> -->
        <h2>ODESZA @ Santa Barbara Bowl</h2>
        <div class="setlist-bg">
            <h3 class="setlist-bg">September 30th, 2023</h3>
        </div>
        <img src="/images/tour_odesza_tlg.jpeg" />
        <section class="setlist">
            <set-list .songs=${this.setList}></set-list>
        </section>
    </article>`;

    }

}
