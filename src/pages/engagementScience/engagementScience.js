import "../../common/styles/index.css";
import "../../common/ui/twoValuesRow/twoValuesRow.css";
import "./engagementSciences.css";
import "./mediaengagementSciences.css";
import Chart from "chart.js/auto";
import { displayPopup, hidePopup } from "../index/index";

const canvas = document.querySelector("#grant-chart");
const engagementSciences = {
  values: [65, 25, 25, 7, 7, 7],
  valuesColor: [
    "#F47D39",
    "#FFB455",
    "#FFB455",
    "#569FD6",
    "#569FD6",
    "#569FD6",
  ],
};

const options = {
  type: "doughnut",
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: "Beneficiaries",
        borderColor: "#ffffff",
        data: engagementSciences.values,
        backgroundColor: engagementSciences.valuesColor,
        hoverOffset: 6,
      },
    ],

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  options: {
    cutout: 80,
    borderColor: "#ffffff",
  },
};

let mathBineficChart;
function initengagementScienceChart() {
  const t = setTimeout(() => {
    mathBineficChart = new Chart(canvas, options);
    clearTimeout(t);
  }, 500);
}

const toEngagementScience = document.querySelector(".toEngagementScience");
const engagementScienceClose = document.querySelector(".engagementScienceClose");
const engagementSciencePage = document.querySelector(".engagementSciencePage");

function showEngagementSciencePage(e) {
  displayPopup(engagementSciencePage);
  initEngagementScienceChart();
  animationEngagementScience();
}
function closeEngagementSciencePage() {
  reverseAnimation();
  hidePopup(engagementSciencePage);
  // const t = setTimeout(() => {
  //   clearTimeout(t);
  // }, 500);
  mathBineficChart.destroy();
}
toEngagementScience.addEventListener("click", showEngagementSciencePage);
engagementScienceClose.addEventListener("click", closeEngagementSciencePage);

//animation elements

const sidebarIcons = document.querySelectorAll(".sidebar__img");
const binefitItems = document.querySelectorAll(".binefic__list-item");
const mathGender = document.querySelectorAll(".gender-breakdown-values");

function animationengagementScience() {
  sidebarIcons.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveToRight");
      clearTimeout(t);
    }, idx * 100 + 50);
  });
  binefitItems.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveToLeft");
      clearTimeout(t);
    }, idx * 100);
  });
  mathGender.forEach((item, idx) => {
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
  binefitItems.forEach((item, idx) => {
    item.classList.add("moveToLeft");
  });
  mathGender.forEach((item, idx) => {
    item.classList.add("moveUp");
  });
}
