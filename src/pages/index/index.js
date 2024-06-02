import "../../common/styles/index.css";
import "./index.css";
import "../../common/ui/popupPage/popupPage.css";

//Math Grants
import "../mathGrants/mathGrants.css";
import "../mathGrants/mediaMathGrants.css";
import "../mathGrants/mathGrants.js";

//Math Curation
import "../mathCuration/mathCuration.js";

// Science Grants
import "../scienceGrants/scienceGrants.js";

//Science Curation
import "../scienceCuration/scienceCuration.js";

//Policy Grant
import "../policyGrants/policyGrants.js";

//Innovation Grants
import "../innovationGrants/innovationGrants.js";

//PilotProjects
import "../pilotProjects/pilotProjects.js";

// AssignedProjects
import "../assignedProjects/assignedProjects.js";

//PrivateSectorProjects
import "../privateSectorProjects/privateSectorProjects.js";

//Organization Projects
import "../organizationalProjects/organizationalProjects.js";

function displayPopup(popup) {
  popup.classList.remove("hidden");
}
function hidePopup(popup) {
  popup.classList.add("hidden");
}

function animatedCounter(options) {
  const {elem, numFrom, numTo, step, interval} = options;
  let numToShow = numFrom;

  const c = setTimeout(() => {
    console.log(`${numTo} timeout start`)
    const t = setInterval(() => {
      console.log('Interval')
      let difference = numTo - numToShow;
      if (numToShow < numTo) {
        if (difference >= step) {
          numToShow += step;
          elem.textContent = numToShow;
        } else if (difference < step) {
          numToShow += difference;
          elem.textContent = numToShow;
        }
      } else {
        clearInterval(t);
      }
    }, interval ?? 100);
    clearTimeout(c);
    console.log(`${numTo} timeout finish`)
  }, 500);
}

export { displayPopup, hidePopup, animatedCounter };
