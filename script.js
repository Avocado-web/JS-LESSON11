"use strict";

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const btnSquare = document.getElementById("e_btn");
const textInput = document.getElementById("text-span");
const square = document.getElementById("square");
const range = document.getElementById("range");
const rangeValue = document.getElementById("range-span");
const circle = document.getElementById("circle");

let colorSquare;
let val;

text.addEventListener("input", function(event) {
    colorSquare = event.target.value;
});

btn.addEventListener("click", function() {
    square.style.backgroundColor = colorSquare;
});

range.addEventListener("input", function(event) {
    circle.style.width = rangeValue.textContent = event.target.value + "%";
    circle.style.height = rangeValue.textContent = event.target.value + "%";
    console.log(circle);
});

btnSquare.style.display = "none";