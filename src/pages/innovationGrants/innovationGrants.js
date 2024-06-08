import "../../common/styles/index.css";
import "../../common/ui/twoValuesRow/twoValuesRow.css";
import "./innovationGrants.css";

import { displayPopup, hidePopup, animatedCounter } from "../index/index";
import { initGenderChart } from "../../common/ui/genderChart/genderChart";

const canvas = document.querySelector("#innovation-grants-gender-1");

const innovationGrantCharts= [];
function initInnovationGrantChart() {
  const t = setTimeout(() => {
    innovationGrantCharts.push(initGenderChart(canvas, [63, 37], ["#F47D39", "#569FD6"]));
    clearTimeout(t);
  }, 500);
}

const toInnovationGrant = document.querySelector(".toInnovationGrant");
const innovationGrantClose = document.querySelector(".innovationGrantClose");
const innovationGrantPage = document.querySelector(".innovationGrantPage");

function showInnovationGrantPage(e) {
  displayPopup(innovationGrantPage);
  initInnovationGrantChart();
  animationInnovationGrant();
}
function closeInnovationGrantPage() {
  reverseAnimation();
  hidePopup(innovationGrantPage);
  innovationGrantCharts.forEach(ch => ch.destroy())
}
toInnovationGrant.addEventListener("click", showInnovationGrantPage);
innovationGrantClose.addEventListener("click", closeInnovationGrantPage);

//animation elements

const sidebarIcons = document.querySelectorAll(".img-innovation-grant");
const innovationBars = document.querySelectorAll(".innovationGrantPage .bar");
const firstNumber = document.querySelector(
  ".innovationGrantPage .binefics-through"
);
const secondNumber = document.querySelector(
  ".innovationGrantPage .binefics-individ"
);

function animationInnovationGrant() {
  sidebarIcons.forEach((item, idx) => {
    const timer = setTimeout(() => {
      item.classList.remove("moveToRight");
      clearTimeout(timer);
    }, idx * 100 + 50);
  });

  animatedCounter({elem: firstNumber, numFrom: 0, numTo: 55, step: 5, interval: 50});
  animatedCounter({elem: secondNumber, numFrom: 0, numTo: 30, step: 2})

  innovationBars.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("scaleX");
      clearTimeout(t);
    }, idx * 100);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  innovationBars.forEach((item, idx) => {
    item.classList.add("scaleX");
  });
}
