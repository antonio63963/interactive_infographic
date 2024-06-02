import '../../common/styles/index.css';
import './index.css';
import '../../common/ui/popupPage/popupPage.css'

//Math Grants
import '../mathGrants/mathGrants.css';
import '../mathGrants/mediaMathGrants.css';
import '../mathGrants/mathGrants.js';

//Math Curation
import '../mathCuration/mathCuration.js';

// Science Grants
import '../scienceGrants/scienceGrants.js';

//Science Curation
import '../scienceCuration/scienceCuration.js';



//PilotProjects
import '../pilotProjects/pilotProjects.js';

// AssignedProjects
import '../assignedProjects/assignedProjects.js';

//PrivateSectorProjects
import '../privateSectorProjects/priviteSectorProjects.js';

//Organization Projects
import '../organizationalProjects/organizationalProjects.js';


function displayPopup(popup) {
  popup.classList.remove('hidden');
}
function hidePopup(popup) {
  popup.classList.add('hidden');
}

export {
  displayPopup,
  hidePopup,
}

console.log('Utilization of Industrially Produced Carbon Dioxide in Protected Horticulture Facilities for Food Security Enhancement and Contribution to Climate Change Mitigation'.length)