import NavItems from "../components/NavItems.js";
import Navbar from "../components/Navbar.js";

let navItems = document.getElementById("navItems");
let nav = document.getElementById('nav');
navItems.innerHTML = NavItems();
nav.innerHTML = Navbar();