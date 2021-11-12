import Navbar from '../components/Navbar.js';
import NavItems from '../components/NavItems.js'

let navItems = document.getElementById("navItems");
let nav = document.getElementById('nav');
navItems.innerHTML = NavItems();
nav.innerHTML = Navbar();

// Click event for Collapsibles
var collapsibles = document.getElementsByClassName("collapsible");
for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
