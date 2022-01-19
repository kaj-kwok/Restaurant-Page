import {displayHeader, displayFooter} from "./header/header"
import createHome from "./home/home"
import './style.css'

const initialPage = document.querySelector('#content');
const header = displayHeader("From Land to Sea");
initialPage.appendChild(header);
const home = createHome();
initialPage.appendChild(home);
initialPage.appendChild(displayFooter())


//create Nav
const nav_bar = document.createElement("div");
nav_bar.classList.add(nav_bar);
