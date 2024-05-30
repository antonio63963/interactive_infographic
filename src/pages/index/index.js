import '../../common/styles/index.css';
import './index.css';
import '../../common/ui/popupPage/popupPage.css'

//Math Grants
import '../mathGrants/mathGrants.css';
import '../mathGrants/mediaMathGrants.css';
import '../mathGrants/mathGrants.js';

import {Chart} from 'chart.js/auto';


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
