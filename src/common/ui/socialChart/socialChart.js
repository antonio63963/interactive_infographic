import { Chart, plugins } from "chart.js/auto";
import { callback } from "chart.js/helpers";

function initSocialChart(canvas, values) {
  const labels = [
    null,
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    null
  ];

  const options = {
    type: "line",
    data: {
      // stepped: false,
      showLine: false,
      labels: labels,
      datasets: [
        {
          data: [null, 18000, 5000, 6500, 0, 6500, 18000, 16000, 20000, 17000, 18500, 4500, 2000],
          fill: false,
          borderColor: "#ffccaf",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 100000,
          ticks: {
            stepSize: 20000
          },
          grid: {
            drawOnChartArea: false,
          },
          
        },
        x: {
          grid: {
            drawOnChartArea: false,
            // color: 'rgba(0,0,0,0)',
          }
        }
      },
      plugins: {
        legend: {
          display: false,
          font: {
            size: 18,
            family: 'Arabic'
          }
        },
        
      },
    },
  };

  Chart.overrides.line.spanGaps = true;
  Chart.defaults.font.family = "Arabic";
  Chart.defaults.color = "#000";
  Chart.defaults.font.size = 12;

  return new Chart(canvas, options);
}

export { initSocialChart };
