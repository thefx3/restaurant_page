import { home }  from "./home.js";
import { menu }  from "./menu.js";
import { about }  from "./about.js";
import './styles.css';

const home_button = document.getElementById("home");
const menu_button = document.getElementById("menu");
const about_button = document.getElementById("about");

// home();
menu();

home_button.addEventListener("click", () => {
    home();
})

menu_button.addEventListener("click", () => {
    menu();
})