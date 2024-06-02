import "./policyGrants.css";
import { displayPopup, hidePopup } from "../index/index.js";

const toPolicyGrant = document.querySelector(".toPolicyGrant");
const policyGrantPage = document.querySelector(".policyGrantPage");
const policyGrantClose = document.querySelector(".policyGrantClose");

function showMathGrantPage(e) {
  displayPopup(policyGrantPage);
  animationMathGrant();
}
function closeMathGrantPage() {
  reverseAnimation();
  hidePopup(policyGrantPage);
}
toPolicyGrant.addEventListener("click", showMathGrantPage);
policyGrantClose.addEventListener("click", closeMathGrantPage);

//animation elements

const sidebarIcons = document.querySelectorAll(".policy-grant-icon");
const domainItems = document.querySelectorAll(".policyGrantPage .domain-item");


function animationMathGrant() {
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });
    domainItems.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveUp");
      clearTimeout(t);
    }, idx * 100);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  domainItems.forEach((item, idx) => {
    item.classList.add("moveUp");
  });
}
