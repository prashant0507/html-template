/** Webinar video */
import { enabledOverlay } from "../helper";

const WEBINAR_VIDEO_URL =
  "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/890/330/BHM_021623_v2.mp4";
const WEBINAR_POSTER_URL =
  "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/890/330/44802-29-SScreenshot-4_15-1280x720.png";

const webinarVideo = () => {
  const element = document.getElementById("webinar-video-btn");
  element.addEventListener("click", () => {
    /**Pause tips video when webinar video is started */
    //let vt = document.getElementById("video-tips");
    //vt.pause();

    /**Pause financial video when webinar video is started */
    const fv = document.getElementById("watch-video");
    fv.pause();

    enabledOverlay(WEBINAR_VIDEO_URL, WEBINAR_POSTER_URL);
  });
};

export default webinarVideo;
