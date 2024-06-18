import "../../common/ui/twoValuesRow/twoValuesRow.css";

import { displayPopup, hidePopup, animatedCounter } from "../index/index";

const toResearchCapacity = document.querySelector(".toResearchCapacity");
const researchCapacityClose = document.querySelector(".researchCapacityClose");

const researchCapacityPage = document.querySelector(".researchCapacityPage");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeResearchCapacityPage();
  }
}

function showResearchCapacityPage(e) {
  displayPopup(researchCapacityPage);
  animationResearchCapacity();
  researchCapacityPage.addEventListener("click", onOpacity);
}
function closeResearchCapacityPage() {
  reverseAnimation();
  hidePopup(researchCapacityPage);
  researchCapacityPage.removeEventListener("click", onOpacity);
}
toResearchCapacity.addEventListener("click", showResearchCapacityPage);
researchCapacityClose.addEventListener("click", closeResearchCapacityPage);

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".researchCapacityPage .sidebar-horizontal-item"
);
const capacityChartItems = document.querySelectorAll(
  ".research-capacity-content .chart-item"
);
const theBigestFirstNum = Array.from(capacityChartItems)
  .map((item) => parseInt(item.dataset.val1, 10))
  .sort((a, b) => a > b)[0];

const percent = 100 / theBigestFirstNum;

function animationResearchCapacity() {
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });

  capacityChartItems.forEach((item, idx) => {
    const val1 = item.dataset.val1;
    const val2 = item.dataset.val2;

    const firstBar = item.querySelector(".first-bar");
    const secondBar = item.querySelector(".second-bar");

    const firstResult = firstBar.querySelector(".first-result");
    const secondResult = firstBar.querySelector(".second-result");

    const t = setTimeout(() => {
      firstBar.style.width = `${val1 * percent}%`;
      secondBar.style.width = `${val2 * percent}%`;

      animatedCounter({
        elem: firstResult,
        numFrom: 0,
        numTo: val1,
        step: 6,
        interval: 100,
        isPercent: false,
      });
      animatedCounter({
        elem: secondResult,
        numFrom: 0,
        numTo: val2,
        step: 2,
        interval: 100,
        isPercent: false,
      });
      clearTimeout(t);
    }, idx * 500 + 50);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item) => {
    item.classList.add("moveToRight");
  });
  capacityChartItems.forEach((item, idx) => {
    item.querySelector(".first-bar").style.width = 0;
    item.querySelector(".second-bar").style.width = 0;
  });
}
