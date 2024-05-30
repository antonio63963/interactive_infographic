import "../../common/styles/index.css";
import "../../common/ui/twoValuesRow/twoValuesRow.css";
import "./mathGrants.css";
import Chart from "chart.js/auto";

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

new Chart(canvas, {
  type: "doughnut",
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: "Beneficiaries",
        data: mathGrants.values,
        backgroundColor: mathGrants.valuesColor,
        innerRadius: 10,
        hoverOffset: 4,
      },
    ],
    // responsive: true,
    // maintainAspectRatio: false,

    scales: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  },
});
