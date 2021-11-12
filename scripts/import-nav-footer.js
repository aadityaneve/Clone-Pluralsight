import Navbar from '../components/Navbar.js';
import NavItems from '../components/NavItems.js'
import Footer from '../components/Footer.js';

let navItems = document.getElementById("navItems");
let nav = document.getElementById('nav');
let footer = document.getElementById('footer');
navItems.innerHTML = NavItems();
nav.innerHTML = Navbar();
footer.innerHTML = Footer();