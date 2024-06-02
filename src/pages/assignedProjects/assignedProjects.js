import './assignedProjects.css';
import { displayPopup, hidePopup } from "../index/index.js";
import { initCardChart } from '../../common/ui/card/card.js';


const toAssignedProjects = document.querySelector(".toAssignedProjects");
const assignedProjectsPage = document.querySelector(".assignedProjectsPage");
const assignedProjectsClose = document.querySelector(".assignedProjectsClose");

const assignedProjectsCharts = [
  {
    title: "electric",
    canvas: document.querySelector('#assigned-project-1'),
    values: [10, 90],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "green",
    canvas: document.querySelector('#assigned-project-2'),
    values: [50, 50],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "bio",
    canvas: document.querySelector('#assigned-project-3'),
    values: [80, 20],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "kfas",
    canvas: document.querySelector('#assigned-project-4'),
    values: [80, 20],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "transition",
    canvas: document.querySelector('#assigned-project-5'),
    values: [80, 20],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "solar",
    canvas: document.querySelector('#assigned-project-6'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "co",
    canvas: document.querySelector('#assigned-project-7'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "service",
    canvas: document.querySelector('#assigned-project-8'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  
];

const allCharts = [];

function initAssignedProjectsCharts() {
  const t = setTimeout(() => {
    assignedProjectsCharts.forEach((b) =>
      allCharts.push(initCardChart(b.canvas, b.values, b.valuesColors))
    );
    clearTimeout(t);
  }, 500);
}

function showAssignedProjectsPage(e) {
  displayPopup(assignedProjectsPage);
  initAssignedProjectsCharts();
}
function closeAssignedProjectsPage() {
  hidePopup(assignedProjectsPage);
  allCharts.forEach((b) => b.destroy());
}
toAssignedProjects.addEventListener("click", showAssignedProjectsPage);
assignedProjectsClose.addEventListener("click", closeAssignedProjectsPage);
