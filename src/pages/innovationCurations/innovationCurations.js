import "./innovationCurations.css";
import { displayPopup, hidePopup, animatedCounter } from "../index/index";
import { initGenderChart } from "../../common/ui/genderChart/genderChart";

const toInnovationCurations = document.querySelector(".toInnovationCurations");
console.log(toInnovationCurations);
const innovationCurationsClose = document.querySelector(
  ".innovationCurationsClose"
);
const innovationCurationsPage = document.querySelector(
  ".innovationCurationsPage"
);

function showInnovationCurationsPage(e) {
  displayPopup(innovationCurationsPage);

  animationInnovationCurations();
}
function closeInnovationCurationsPage() {
  reverseAnimation();
  hidePopup(innovationCurationsPage);
  // const t = setTimeout(() => {
  //   clearTimeout(t);
  // }, 500);
  // mathBineficChart.destroy();
}
toInnovationCurations.addEventListener("click", showInnovationCurationsPage);
innovationCurationsClose.addEventListener(
  "click",
  closeInnovationCurationsPage
);

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".innovationCurationsPage .sidebar-horizontal-item"
);
const barsBase = document.querySelectorAll(".innovationCurationsPage .bar");
const bineficMoblieCharts = document.querySelectorAll(
  ".innovationCurationsPage .bar-graph"
);
const canvas = document.querySelector("#innovation-curations-gender-1");
const beneficsBySector = Array.from(
  document.querySelectorAll(".innovation-curations-content .chart-item")
);

let innovationGrantCharts;
function initInnovationGrantChart() {
  const t = setTimeout(() => {
    innovationGrantCharts = initGenderChart(
      canvas,
      [63, 37],
      ["#F47D39", "#569FD6"]
    );

    clearTimeout(t);
  }, 500);
}

function animBarsStack(elemsArr) {
  const sumOfValues = elemsArr.reduce((acc, item) => {
    acc += +item.dataset.value;
    return acc;
  }, 0);
  const percent = 100 / sumOfValues;
  console.log("sum: ", sumOfValues);
  console.log("percent: ", percent);

  elemsArr.reverse().forEach((bar, idx) => {
    const value = bar.dataset.value;
    const t = setTimeout(() => {
      // Object.assign(bar.style, {
      //   width: `${+value * percent}%`,
      //   backgroundColor: color,
      // });
      bar.style.width = `${+value * percent}%`;
      clearTimeout(t);
    }, idx * 500 + 50);
  });
}

function animationInnovationCurations() {
  initInnovationGrantChart();
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });
  barsBase.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("scaleX");
      bineficMoblieCharts[idx].classList.remove("scaleX");
      clearTimeout(t);
    }, idx * 100);
  });

  animBarsStack(beneficsBySector);
}

function reverseAnimation() {
  innovationGrantCharts.destroy();

  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  barsBase.forEach((item, idx) => {
    item.classList.add("scaleX");
    bineficMoblieCharts[idx].classList.add("scaleX");
  });
  beneficsBySector.forEach(item => item.style.width = 0);
}
