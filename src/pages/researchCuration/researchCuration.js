import "../../common/ui/twoValuesRow/twoValuesRow.css";
import "./researchCuration.css";

import { displayPopup, hidePopup } from "../index/index";

const toResearchCuration = document.querySelector(".toResearchCuration");

const researchCurationClose = document.querySelector(".researchCurationClose");
const researchCurationPage = document.querySelector(".researchCurationPage");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeResearchCurationPage();
  }
}

function showResearchCurationPage(e) {
  displayPopup(researchCurationPage);
  researchCurationPage.addEventListener("click", onOpacity);

  animationResearchCuration();
}
function closeResearchCurationPage() {
  reverseAnimation();
  hidePopup(researchCurationPage);
  researchCurationPage.removeEventListener("click", onOpacity);
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
}

function reverseAnimation() {
  sidebarIcons.forEach((item) => {
    item.classList.add("moveToRight");
  });
  chartInfo.forEach((item) => {
    item.classList.add("sliceDown");
  });
}
