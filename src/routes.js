//Import pour les vues
import AccueilContainer from "./ClassComponents/AccueilContainer.js";
import Tendances from "./views/Tendances.js";
import MonCompte from "./views/MonCompte.js";
import Forum from "./views/Forum.js";
import Soi from "./views/Soi.js";
import Conjoints from "./views/Conjoints.js";
import Professionnels from "./views/Professionnels.js";
import Familles from "./views/Familles.js";
import Amis from "./views/Amis.js";

// Import pour les Icones
import {  MdHome,
          MdAccountCircle,
          MdForum,
          MdWork,
        } from 'react-icons/md';
import {VscFlame} from 'react-icons/vsc';
import {GiLovers, GiFamilyTree} from 'react-icons/gi';
import {FaUserFriends} from 'react-icons/fa';
import {FcSelfie} from 'react-icons/fc';


const dashRoutes = [
  {
    path: "/accueilContainer",
    name: "Accueil",
    icon: <MdHome/>,
    component: AccueilContainer,
    layout: "/ressources_relationnelles",
  },
  {
    path: "/tendances",
    name: "Tendances",
    icon:<VscFlame/>,
    component: Tendances,
    layout: "/ressources_relationnelles",
  },
  {
    path: "/monCompte",
    name: "Mon Compte",
    icon:<MdAccountCircle/>,
    component: MonCompte,
    layout: "/ressources_relationnelles",
  },
  {
    path: "/forum",
    name: "Forum",
    icon:<MdForum/>,
    component: Forum,
    layout: "/ressources_relationnelles",
  },
  {
    textSeparation:"Améliorer vos relations",
    path: "/soi",
    name: "Soi",
    icon: <FcSelfie/>,
    component: Soi,
    layout: "/ressources_relationnelles",
  },
  {
    path: "/conjoints",
    name: "Conjoints",
    icon: <GiLovers/>,
    component: Conjoints,
    layout: "/ressources_relationnelles",
  },
  {
    path: "/professionnels",
    name: "Professionnels",
    icon: <MdWork/>,
    component: Professionnels,
    layout: "/ressources_relationnelles",
  },
  {
    path: "/familles",
    name: "Familles",
    icon: <GiFamilyTree/>,
    component: Familles,
    layout: "/ressources_relationnelles",
  },
  {
    path: "/amis",
    name: "Amis",
    icon: <FaUserFriends/>,
    component: Amis,
    layout: "/ressources_relationnelles",
  }
];

export default dashRoutes;
