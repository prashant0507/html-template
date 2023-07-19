import financialVideo from "./assets/js/components/financial-support";
import webinarVideo from "./assets/js/components/fidility-wbinar";

import { resetAllVideo, isOverlay, closeOverlay } from "./assets/js/helper";

let isShowOverlay = false;
let deviceWidth = window.innerWidth;
if (deviceWidth > 1150) { 
  isShowOverlay = false;
} else {
  isShowOverlay = true;
}

window.addEventListener("resize", event => {
  let isOverlay;
  let deviceWidth = window.innerWidth;
  if (deviceWidth > 1150) {
    isOverlay = false;
    financialVideo(isOverlay);
  } else {
    isOverlay = true;
    financialVideo(isOverlay);
    resetAllVideo();
  }
});

window.onload = () => {
  financialVideo(isShowOverlay);
  webinarVideo();
  closeOverlay();
};


