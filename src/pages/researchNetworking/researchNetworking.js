import "../../common/ui/twoValuesRow/twoValuesRow.css";
import "./researchNetworking.css";

import { displayPopup, hidePopup, animatedCounter } from "../index/index";

const toResearchNetworking = document.querySelector(".toResearchNetworking");
 
const researchNetworkingClose = document.querySelector(
  ".researchNetworkingClose"
);
const researchNetworkingPage = document.querySelector(
  ".researchNetworkingPage"
);
let isMobile = false;

function onWindowWidth(e) {
  if(window.innerWidth <= 576) {
    if(!isMobile) {
      isMobile = true;
      animationResearchNetworking(isMobile);
    }
  }else {
    if(isMobile) {
      isMobile = false;
      animationResearchNetworking(isMobile);
    }
  }

}

function showResearchNetworkingPage(e) {
  displayPopup(researchNetworkingPage);
  window.addEventListener('resize', onWindowWidth);

  animationResearchNetworking(window.innerWidth <= 576);
}
function closeResearchNetworkingPage() {
  reverseAnimation();
  hidePopup(researchNetworkingPage);
  // const t = setTimeout(() => {
  //   clearTimeout(t);
  // }, 500);
  // mathBineficChart.destroy();
}
toResearchNetworking.addEventListener("click", showResearchNetworkingPage);
researchNetworkingClose.addEventListener("click", closeResearchNetworkingPage);

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".researchNetworkingPage .sidebar-horizontal-item"
);
const stackBars = Array.from(
  document.querySelectorAll(".research-networking-row .stack-chart-item")
).reverse();
const numsBars = Array.from(
  document.querySelectorAll(".research-networking-row .num")
).reverse();


function animationResearchNetworking(isMobile) {
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });

  stackBars.forEach((b, idx) => {
    isMobile ?
      Object.assign(b.style, {height: '100%', width: 0})
    : Object.assign(b.style, {height: 0, width: '100%'})
    Object.assign(numsBars[idx].style, {
      "font-size": b.dataset.font,
      color: b.dataset.color,
    });
  });

  stackBars.forEach((bar, idx) => {
    const percent = bar.dataset.percent;
    const color = bar.dataset.color;
    const font = bar.dataset.font;

    const t = setTimeout(() => {
     isMobile ? bar.style.width = `${percent}%` : bar.style.height = `${percent}%`;
      bar.style.backgroundColor = color;
      const elemNum = numsBars[idx];

      animatedCounter({
        elem: elemNum,
        numFrom: 0,
        numTo: percent,
        step: 3,
        interval: 100,
        isPercent: true,
      });
      clearTimeout(t);
    }, idx * 500 + 50);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item) => {
    item.classList.add("moveToRight");
  });
}
