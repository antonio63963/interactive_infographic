import "./organizationalAchivements.css";
import { displayPopup, hidePopup, animatedCounter } from "../index/index.js";

const toOrganizationalAchivements = document.querySelector(
  ".toOrganizationalAchivements"
);
const organizationalAchivementsPage = document.querySelector(
  ".organizationalAchivementsPage"
);
const organizationalAchivementsClose = document.querySelector(
  ".organizationalAchivementsClose"
);

//anime
const job = organizationalAchivementsPage.querySelector(".job");
const courses = organizationalAchivementsPage.querySelector(".courses");
const jobNum = organizationalAchivementsPage.querySelector(".candidates");

const amountsOrgAchieve =
  organizationalAchivementsPage.querySelectorAll(".anime-text");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeOrganizationalAchivementsPage();
  }
}

function showOrganizationalAchivementsPage(e) {
  displayPopup(organizationalAchivementsPage);
  const t = setTimeout(() => {
    job.classList.remove("job-anime");
    courses.classList.remove("courses-anime");

    animatedCounter({
      elem: jobNum,
      numFrom: 0,
      numTo: +jobNum.dataset.value,
      step: 50,
      interval: 100,
      isPercent: false,
    });

    amountsOrgAchieve.forEach((item) =>
      animatedCounter({
        elem: item,
        numFrom: 0,
        numTo: +item.dataset.value,
        step: 4,
        interval: 100,
        isPercent: false,
      })
    );
    organizationalAchivementsPage.addEventListener("click", onOpacity);
    clearTimeout(t);
  }, 100);
}

function closeOrganizationalAchivementsPage() {
  hidePopup(organizationalAchivementsPage);
  job.classList.add("job-anime");
  courses.classList.add("courses-anime");
  organizationalAchivementsPage.removeEventListener("click", onOpacity);
}
toOrganizationalAchivements.addEventListener(
  "click",
  showOrganizationalAchivementsPage
);
organizationalAchivementsClose.addEventListener(
  "click",
  closeOrganizationalAchivementsPage
);
