"use strict";

const tanya = document.getElementById("tanya");
const john = document.getElementById("john");
const prevtanya = document.getElementById("prevtanya");
const nexttanya = document.getElementById("nexttanya");
const prevjohn = document.getElementById("prevjohn");
const nextjohn = document.getElementById("nextjohn");

function next() {
  tanya.style.display = "none";
  john.style.display = "flex";
}

function prev() {
  tanya.style.display = "flex";
  john.style.display = "none";
}

nexttanya.addEventListener("click", next);
prevjohn.addEventListener("click", prev);
