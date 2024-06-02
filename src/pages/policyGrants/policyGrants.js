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
const grantItems = document.querySelectorAll(".grant-item");
const chartValues = document.querySelectorAll(".chart-description-row");

function animationMathGrant() {
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });
  grantItems.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("scaleX");
      clearTimeout(t);
    }, idx * 100);
  });
  chartValues.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveUp");
      clearTimeout(t);
    }, idx * 110);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  grantItems.forEach((item, idx) => {
    item.classList.add("scaleX");
  });
  chartValues.forEach((item, idx) => {
    item.classList.add("moveUp");
  });
}
