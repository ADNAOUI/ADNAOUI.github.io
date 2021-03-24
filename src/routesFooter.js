//Import pour les vues

import About from './views/About.js';
import Faq from './views/FAQ.js';
import Conduite from './views/Conduite.js';
import Conditions from './views/Conditions.js';
import PoliticalCookies from './views/PolitiqueCookies.js';
import Help from './views/Help.js';

const footerRoutes = [
  {
    pathFooter: "/about",
    nameFooter: "About",
    component: About,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/faq",
    nameFooter: "Faq",
    component: Faq,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/conduite",
    nameFooter: "Conduite",
    component: Conduite,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/conditions",
    nameFooter: "Conditions",
    component: Conditions,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/politicalCookies",
    nameFooter: "PoliticalCookies",
    component: PoliticalCookies,
    layoutFooter: "/ressources_relationnelles",
  },
  {
    pathFooter: "/help",
    nameFooter: "Help",
    component: Help,
    layoutFooter: "/ressources_relationnelles",
  },
];

export default footerRoutes ;
