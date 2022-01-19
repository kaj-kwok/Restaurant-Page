import displayHeader from "./header/header"
import createHome from "./home/home"
import './style.css'

const initialPage = document.querySelector('#content');
const header = displayHeader("From Land to Sea")
initialPage.appendChild(header);
const home = createHome();
initialPage.appendChild(home)


