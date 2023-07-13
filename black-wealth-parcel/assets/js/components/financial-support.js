import { isOverlay, enabledOverlay } from "../helper";

/** Financial video */
const FINANCE_VIDEO_URL =
  "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/104/991/QFCM4762000H_45855_PI_Joiya_Mitchell_Fuel_to_Create_Change_3m58s_Fidcom_16x9_NC_(1).mp4";
const FINANCE_POSTER_URL = "./assets/images/Joiya_Poster_Image_704x396.png";
// let isShowOverlay = isOverlay();
// console.log("isOverlay in", isShowOverlay);
const financialVideo = isShowOverlay => {
  const videoPlayer = document.getElementById("watch-video");
  const watchButton = document.getElementById("watch-video-btn");
  const playButton = document.getElementById("play-watch-now");

  // Action on Watch Now button
  watchButton.addEventListener("click", () => {
    if (!isShowOverlay) {
      videoPlayer.currentTime = 0;
      videoPlayer.play();
      playButton.classList.add("hide");
    } else {
      enabledOverlay(FINANCE_VIDEO_URL, FINANCE_POSTER_URL);
    }
  });

  // Action on Play button
  playButton.addEventListener("click", () => {
    if (!isShowOverlay) {
      videoPlayer.play();
      playButton.classList.add("hide");
    } else {
      enabledOverlay(FINANCE_VIDEO_URL, FINANCE_POSTER_URL);
    }
  });
};

export default financialVideo;
