import './organizationalAchivements.css';
import { displayPopup, hidePopup } from "../index/index.js";

const toOrganizationalAchivements = document.querySelector(".toOrganizationalAchivements");
const organizationalAchivementsPage = document.querySelector(".organizationalAchivementsPage");
const organizationalAchivementsClose = document.querySelector(".organizationalAchivementsClose");

function showOrganizationalAchivementsPage(e) {
  displayPopup(organizationalAchivementsPage);

}
function closeOrganizationalAchivementsPage() {
  hidePopup(organizationalAchivementsPage);
}
toOrganizationalAchivements.addEventListener("click", showOrganizationalAchivementsPage);
organizationalAchivementsClose.addEventListener("click", closeOrganizationalAchivementsPage);
