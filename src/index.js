import createHome from "./home/home"
import menu_wrapper from "./menu.js"
import createAboutUs from "./about.js"
import './style.css'
import initialRun from "./Initialrun.js"

initialRun();

//create event listeners
const mainContent = document.querySelector("#main_content") 
document.querySelector(".menu_button").addEventListener('click', () =>{
    console.log("test")
    mainContent.appendChild(menu_wrapper())
})
document.querySelector(".aboutUs_button").addEventListener('click', () =>{
    mainContent.appendChild(createAboutUs());
})
document.querySelector(".home_button").addEventListener('click', () =>{
    mainContent.appendChild(createHome());
})

