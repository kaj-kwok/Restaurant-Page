import {displayHeader, displayFooter} from "./header/header"
import createHome from "./home/home"
import menu_wrapper from "./menu.js"
import './style.css'

//create Nav
const nav_bar = document.createElement("div");
nav_bar.classList.add("nav_bar");
nav_bar.innerHTML = `<ul>
    <li>Home</li>
    <li>Menu</li>
    <li>About Us</li>
    `


const initialPage = document.querySelector('#content');
const header = displayHeader("From Land to Sea");
initialPage.appendChild(header);
header.appendChild(nav_bar);
// const home = createHome();
const menulist = menu_wrapper();
initialPage.appendChild(menulist);
initialPage.appendChild(displayFooter())



