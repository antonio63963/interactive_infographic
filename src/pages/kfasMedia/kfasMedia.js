import "./kfasMedia.css";
import { displayPopup, hidePopup } from "../index/index.js";
import { initSocialChart } from "../../common/ui/socialChart/socialChart.js";

const toKfasMedia = document.querySelector(".toKfasMedia");
const kfasMediaPage = document.querySelector(".kfasMediaPage");
const kfasMediaClose = document.querySelector(".kfasMediaClose");

function showKfasMediaPage(e) {
  displayPopup(kfasMediaPage);
  initTabs();
}
function closeMathGrantPage() {
  hidePopup(kfasMediaPage);
  closeTabs();
}
toKfasMedia.addEventListener("click", showKfasMediaPage);
kfasMediaClose.addEventListener("click", closeMathGrantPage);

//animation elements

const tabs = document.querySelectorAll(".kfasMediaPage .app-tab");
const canvas = document.querySelector("#socials-chart").getContext('2d');
let socialsChart;

function onTab(e) {
  console.log(e.target.closest('.app-tab'), "TAB")
  const tab = e.target.closest('.app-tab');
  console.log('ID: ', tab.attributes.id.value)
  const tabId = tab.attributes.id.value;
  tabs.forEach(t => t.id == tabId ? t.classList.add('active') : t.classList.remove('active'))
}

function initTabs() {
  tabs.forEach(t => t.addEventListener('click', onTab));
  // const t = setTimeout(() => {
    socialsChart = initSocialChart(canvas, []);
    
  //   clearTimeout(t);
  // }, 500);
}

// window.addEventListener('beforeprint', () => {
//   socialsChart.resize(650, 240)
// })

function closeTabs() {
  tabs.forEach(t => t.removeEventListener('click', onTab));
  socialsChart.destroy();
}
