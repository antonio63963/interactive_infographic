import './financialAchivements.css';
import { displayPopup, hidePopup } from "../index/index.js";

const toFinancialAchivements = document.querySelector(".toFinancialAchivements");
const financialAchivementsPage = document.querySelector(".financialAchivementsPage");
const financialAchivementsClose = document.querySelector(".financialAchivementsClose");

function showFinancialAchivementsPage(e) {
  displayPopup(financialAchivementsPage);

}
function closeFinancialAchivementsPage() {
  hidePopup(financialAchivementsPage);
}
toFinancialAchivements.addEventListener("click", showFinancialAchivementsPage);
financialAchivementsClose.addEventListener("click", closeFinancialAchivementsPage);
