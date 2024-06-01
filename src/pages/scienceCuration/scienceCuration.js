import "./scienceCuration.css";
import { displayPopup, hidePopup } from "../index/index.js";


const toScienceCuration = document.querySelector(".toScienceCuration");
const scienceCurationPage = document.querySelector(".scienceCurationPage");
const scienceCurationClose = document.querySelector(".scienceCurationClose");

const bineficChartsData = [
  {
    title: "KFAS",
    canvas: document.querySelector("#binefic_1"),
    values: [205, 290],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "google",
    canvas: document.querySelector("#binefic_2"),
    values: [118, 340],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "hackaton",
    canvas: document.querySelector("#binefic_3"),
    values: [88, 340],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "camp",
    canvas: document.querySelector("#binefic_4"),
    values: [80, 340],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "STEM",
    canvas: document.querySelector("#binefic_5"),
    values: [14, 340],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
];

const allCharts = [];

function initBineficsCharts() {
  const t = setTimeout(() => {
   
    
    clearTimeout(t);
  }, 500);
}

function showMathCurationPage(e) {
  displayPopup(scienceCurationPage);
  // initBineficsCharts();
  animationScienceCuration();
}
function closeMathCurationPage() {
  reverseAnimation();
  hidePopup(scienceCurationPage);
  allCharts.forEach((b) => b.destroy());
}
toScienceCuration.addEventListener("click", showMathCurationPage);
scienceCurationClose.addEventListener("click", closeMathCurationPage);

//animation elements

const sidebarIcons = document.querySelectorAll(".sidebar-icons-science-curation");
const chartBarsScienceCuration = document.querySelectorAll(".binefic-item-s-cur");


function animationScienceCuration() {
  sidebarIcons.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveToRight");
      clearTimeout(t);
    }, idx * 100 + 50);
  });
  chartBarsScienceCuration.forEach((item, idx) => {
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
  chartBarsScienceCuration.forEach((item, idx) => {
    item.classList.add("scaleX");
  });
 
}
