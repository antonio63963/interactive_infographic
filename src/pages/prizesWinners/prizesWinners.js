import "./prizesWinners.css";
import { displayPopup, hidePopup } from "../index/index.js";

const toPrizeWinners = document.querySelector(".toPrizeWinners");
const prizesWinnersPage = document.querySelector(".prizesWinnersPage");
const prizesWinnersClose = document.querySelector(".prizesWinnersClose");

function showPrizeWinnersPage(e) {
  displayPopup(prizesWinnersPage);
}
function closePrizeWinnersPage() {
  hidePopup(prizesWinnersPage);
}

toPrizeWinners.addEventListener("click", showPrizeWinnersPage);
prizesWinnersClose.addEventListener("click", closePrizeWinnersPage);
