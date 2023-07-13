/**
 * Device width and resize
 */
export const isOverlay = () => {
  let isOverlay;
  let deviceWidth = window.innerWidth;
  isOverlay = false;
  if (deviceWidth > 1150) {
    isOverlay = false;
  } else {
    isOverlay = true;
  }
  return isOverlay;
};

/** Reset all video when we changes screen size */
export const resetAllVideo = () => {
  /**Reset tips video when webinar video is started */
  //   let vt = document.getElementById("video-tips");
  //   vt.load();

  /**Reset financial video when webinar video is started */
  const fv = document.getElementById("watch-video");
  fv.load();
};

/** Enable overlay modal small device */
export const enabledOverlay = (videoPath, posterPath) => {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("lightbox").style.display = "block";
  let elem = document.getElementById("overlay-video");
  elem.src = videoPath;
  elem.poster = posterPath;
  elem.play();
};

/** Close overlay modal */
export const closeOverlay = () => {
  let elem = document.getElementById("vid-close");
  elem.addEventListener("click", () => {
    resetOverlay();
  });
};

/** Reset Overlay */
export const resetOverlay = () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("lightbox").style.display = "none";
  let elem = document.getElementById("overlay-video");
  elem.src = "";
  elem.poster = "";
};
