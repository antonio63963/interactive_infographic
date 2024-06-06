import "../../common/ui/twoValuesRow/twoValuesRow.css";
import "./researchCuration.css";

import { displayPopup, hidePopup, animatedCounter } from "../index/index";

const toResearchCuration = document.querySelector(".toResearchCuration");
console.log(toResearchCuration);
const researchCurationClose = document.querySelector(".researchCurationClose");
const researchCurationPage = document.querySelector(".researchCurationPage");

function showResearchCurationPage(e) {
  displayPopup(researchCurationPage);

  animationResearchCuration();
}
function closeResearchCurationPage() {
  reverseAnimation();
  hidePopup(researchCurationPage);
  // const t = setTimeout(() => {
  //   clearTimeout(t);
  // }, 500);
  // mathBineficChart.destroy();
}
toResearchCuration.addEventListener("click", showResearchCurationPage);
researchCurationClose.addEventListener("click", closeResearchCurationPage);

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".researchCurationPage .sidebar-horizontal-item"
);
const chartInfo = document.querySelectorAll(
  ".researchCurationPage .chart-info"
);

function animationResearchCuration() {
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });
  chartInfo.forEach((info, idx) => {
    const t = setTimeout(() => {
      info.classList.remove("sliceDown");

      clearTimeout(t);
    }, idx * 500 + 50);
  });
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
  sidebarIcons.forEach((item) => {
    item.classList.add("moveToRight");
  });
  chartInfo.forEach((item) => {
    item.classList.add("sliceDown");
  });
}
