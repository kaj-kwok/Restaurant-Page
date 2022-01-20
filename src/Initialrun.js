import {displayHeader, displayFooter} from "./header/header"
import createHome from "./home/home"

function initialRun() {
//create Nav
const nav_bar = document.createElement("div");
nav_bar.classList.add("nav_bar");
const menuBtn = document.createElement("button");
menuBtn.classList.add("menu_button");
menuBtn.textContent = "Menu"
const homeBtn = document.createElement("button");
homeBtn.classList.add("home_button");
homeBtn.textContent = "Home"
const aboutBtn = document.createElement("button");
aboutBtn.classList.add("aboutUs_button");
aboutBtn.textContent = "About Us"
nav_bar.appendChild(homeBtn)
nav_bar.appendChild(menuBtn)
nav_bar.appendChild(aboutBtn)
const initialPage = document.querySelector('#content');
const header = displayHeader("From Land to Sea"); 
initialPage.appendChild(header);
header.appendChild(nav_bar);
const mainContent = document.createElement("div")
mainContent.id = "main_content"
initialPage.appendChild(mainContent)
mainContent.appendChild(createHome());
initialPage.appendChild(displayFooter())

return initialPage
}

export default initialRun


