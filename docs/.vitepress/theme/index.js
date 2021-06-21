import DefaultTheme from 'vitepress/theme';
import HeroFloatingLogo from './components/HeroFloatingLogo.vue';
import StartingSection from './components/StartingSection.vue';
import StartNow from './components/StartNow.vue';
import FooterSection from './components/FooterSection.vue';

import './index.scss';

import "@fontsource/ibm-plex-mono/700.css"
import "@fontsource/ibm-plex-mono/600.css"


export default {
  ...DefaultTheme,

  
  
  enhanceApp({ app, router, siteData }) {
    app.component('HeroFloatingLogo', HeroFloatingLogo);
    app.component('StartingSection', StartingSection);
    app.component('StartNow', StartNow);
    app.component('FooterSection', FooterSection);
    
  }
}
