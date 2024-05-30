import "../../common/styles/index.css";
import "../../common/ui/twoValuesRow/twoValuesRow.css";
import "./mathGrants.css";
import "./mediaMathGrants.css";
import Chart from "chart.js/auto";
import { displayPopup, hidePopup } from "../index";

const canvas = document.querySelector("#grant-chart");
const mathGrants = {
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
        data: mathGrants.values,
        backgroundColor: mathGrants.valuesColor,
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
function initMathGrantChart() {
  const t = setTimeout(() => {
    mathBineficChart = new Chart(canvas, options);
  }, 500);
}

const toMathGrant = document.querySelector(".toMathGrant");
const mathGrantClose = document.querySelector(".mathGrantClose");
const mathGrantPage = document.querySelector(".mathGrantPage");

function showMathGrantPage(e) {
  displayPopup(mathGrantPage);
  initMathGrantChart()
}
function closeMathGrantPage() {
  hidePopup(mathGrantPage);
  mathBineficChart.destroy();
}
toMathGrant.addEventListener("click", showMathGrantPage);
mathGrantClose.addEventListener("click", closeMathGrantPage);
