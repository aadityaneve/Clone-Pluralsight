import IndividualPricingCards2 from "../components/IndividualPricingCards2.js";
import MonthlyYearlyBtn from "../components/MonthlyYearlyBtn.js";
import FourteenDayTeamTrial from "../components/FourteenDayTeamTrial.js";
import FourteenDayEnterpriseTrial from "../components/FourteenDayEnterpriseTrial.js";

let sliderZeroPercent = document.getElementById("sliderZeroPercent");
let sliderFiftyPercent = document.getElementById("sliderFiftyPercent");
let sliderHundredPercent = document.getElementById("sliderHundredPercent");

let slider = document.getElementById("slider");
let circleSlider = document.getElementById("circleSlider");

let dataDiv = document.getElementsByClassName("dataDiv")[0];
dataDiv.innerHTML = IndividualPricingCards2();

sliderZeroPercent.addEventListener("click", slideLeft);
function slideLeft() {
    slider.setAttribute("class", "slider0");
    circleSlider.setAttribute("class", "circleSlider0");

    dataDiv.innerHTML = IndividualPricingCards2();
}

sliderFiftyPercent.addEventListener("click", slideMiddle);
function slideMiddle() {
    slider.setAttribute("class", "slider50");
    circleSlider.setAttribute("class", "circleSlider50");

    dataDiv.innerHTML = FourteenDayTeamTrial();
}

sliderHundredPercent.addEventListener("click", slideRight);
function slideRight() {
    slider.setAttribute("class", "slider100");
    circleSlider.setAttribute("class", "circleSlider100");

    dataDiv.innerHTML = FourteenDayEnterpriseTrial();
}


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


