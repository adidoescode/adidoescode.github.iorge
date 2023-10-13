"use strict";

let dropDownBtn = document.getElementById("dropdown-btn");
let dropDownLinks = document.querySelector(".dropdown-links");

dropDownBtn.addEventListener("click", openDropDown);


function openDropDown() {
    dropDownLinks.classList.toggle("hidden");
}