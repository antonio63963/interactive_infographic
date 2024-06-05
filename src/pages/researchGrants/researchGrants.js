import "../../common/styles/index.css";
import "../../common/ui/twoValuesRow/twoValuesRow.css";
import "./researchGrants.css";

import { displayPopup, hidePopup, animatedCounter } from "../index/index";

const toResearchGrants = document.querySelector(".toResearchGrants");
const researchGrantsClose = document.querySelector(".researchGrantsClose");
const researchGrantsPage = document.querySelector(".researchGrantsPage");

function showResearchGrantsPage(e) {
  displayPopup(researchGrantsPage);

  animationResearchGrants();
}
function closeResearchGrantsPage() {
  reverseAnimation();
  hidePopup(researchGrantsPage);
  // const t = setTimeout(() => {
  //   clearTimeout(t);
  // }, 500);
  // mathBineficChart.destroy();
}
toResearchGrants.addEventListener("click", showResearchGrantsPage);
researchGrantsClose.addEventListener("click", closeResearchGrantsPage);

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".researchGrantsPage .sidebar-horizontal-item"
);
const institutionItemsChart = document.querySelectorAll(
  ".research-grants-chart-item .bar-fill"
);
console.log("istitution: ", institutionItemsChart);

function animationResearchGrants() {
  institutionItemsChart.forEach((item, idx) => {
    const t = setTimeout(() => {
      const width = item.dataset.width;
      item.style.width = width;
    }, idx * 100 + 50);
  });
  // Array.from(sidebarIcons).reverse().forEach((item, idx) => {
  //   const t = setTimeout(() => {
  //     item.classList.remove("moveToRight");
  //     clearTimeout(t);
  //   }, idx * 100 + 50);
  // });
  // barsBase.forEach((item, idx) => {
  //   const t = setTimeout(() => {
  //     item.classList.remove("scaleX");
  //     bineficMoblieCharts[idx].classList.remove("scaleX");
  //     sidebarValues[idx].style.marginLeft = '12px';
  //     clearTimeout(t);
  //   }, idx * 100);
  // });
  // bineficVluesElements.forEach((el, idx) => {
  //   animatedCounter({elem: el, numFrom: 0, numTo: bineficValuesList[idx], step: 3, interval: 100});
  // });
}

function reverseAnimation() {
  // sidebarIcons.forEach((item, idx) => {
  //   item.classList.add("moveToRight");
  // });
  institutionItemsChart.forEach((item, idx) => {
    item.style.width = 0;
  });
}
