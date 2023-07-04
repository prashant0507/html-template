const FINANCE_VIDEO_URL =
  "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/104/991/QFCM4762000H_45855_PI_Joiya_Mitchell_Fuel_to_Create_Change_3m58s_Fidcom_16x9_NC_(1).mp4";
const FINANCE_POSTER_URL = "./assets/images/Joiya_Poster_Image_704x396.png";

const WEBINAR_VIDEO_URL =
  "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/890/330/BHM_021623_v2.mp4";
const WEBINAR_POSTER_URL =
  "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/890/330/44802-29-SScreenshot-4_15-1280x720.png";

/**
 * Device width and resize
 */
let deviceWidth = window.innerWidth;
isOverlay = false;
if (deviceWidth > 1150) {
  isOverlay = false;
} else {
  isOverlay = true;
}
window.addEventListener("resize", event => {
  deviceWidth = window.innerWidth;
  if (deviceWidth > 1150) {
    isOverlay = false;
    financialVideo();
  } else {
    isOverlay = true;
    resetAllVideo();
  }
});

/**
 * WINDOW ONLOAD
 */
const onLoad = () => {
  loadMoneyTipsSection();
  loaddeeperInsightsSection();
  loadMoneyGrowSection();
  loadCommunityPage();
  loadCommunityEmpowermentSection();
  financialVideo();
  webinarVideo();
  closeOverlay();
};

const loadCommunityPage = () => {
  data = "";
  const communityArray = [
    {
      title:
        "Do you have a Fidelity benefits account offered by your employer?",
      paragraph:
        "Access your 401(k), 403(b), and other savings accounts. You can also find support, help, and information.",
      link: "javascript:void(0)",
      linkText: "Log In",
      boxClass: "box-login",
      areaLabel: "Login to Netbenefits"
    },
    {
      title: "Looking to learn more about budgeting, saving, and investing?",
      paragraph:
        "Find a range of resources to help you make the most of your money, build personal wealth, and prepare for your future.",
      link: "javascript:void(0)",
      linkText: "Get Started",
      boxClass: "box-start",
      areaLabel: "managing your money learning path"
    }
  ];

  communityArray.forEach(elem => {
    data += `
    <div class="box ${elem.boxClass}">
      <div class="box-content">
        <h5 class="m-0 font-normal">
          ${elem.title}
        </h5>
        <p>
        ${elem.paragraph}
        </p>
        <div class="btn-wrapper">
          <a href="${elem.link}" aria-label="${elem.areaLabel}" class="btn btn-primary d-block">
          ${elem.linkText}
          <span class="sr-only">, opens in new window</span>
          </a>
        </div>
      </div>
    </div>
`;
  });

  document.getElementById("append-community-boxes").innerHTML = data;
};

const loadCommunityEmpowermentSection = () => {
  data = "";
  const empowermentSection = [
    {
      image: "./assets/images/card-img-9.jpeg",
      title: "Invest in My Education (ME)<sup>SM</sup>",
      areaLabel: "Invest in My Education",
      subTitle:
        "Fidelity is rolling out a $250 million program to help students from Black, Latino, and other historically underserved communities pay for college, improve economic mobility, and build generational wealth.",
      link: "javascript:void(0)"
    },
    {
      image: "./assets/images/card-img-10.jpeg",
      title: "Creating a Diverse and Inclusive Workplace",
      areaLabel: "Creating a Diverse and Inclusive Workplace",
      subTitle:
        "We’re building a workforce that celebrates and elevates employees of all backgrounds.",
      link: "javascript:void(0)"
    },
    {
      image: "./assets/images/card-img-4.jpeg",
      title: "Black Men XCEL Summit",
      areaLabel: "Black Men XCEL Summit",
      subTitle:
        "We’re committed to being a pillar in the Black community for financial education, wealth building, and attracting top talent.",
      link: "javascript:void(0)"
    },
    {
      image: "./assets/images/card-img-5.jpeg",
      title: "Black Enterprise: Women of Power",
      areaLabel: "Black Enterprise: Women of Power",
      subTitle:
        "We’re a proud sponsor of the preeminent professional leadership conference for executive women of color.",
      link: "javascript:void(0)"
    },
    {
      image: "./assets/images/card-img-8.jpeg",
      title: "Carnegie Hall: A Night of Black Excellence",
      areaLabel: "Carnegie Hall: A Night of Black Excellence",
      subTitle:
        'Fidelity proudly sponsored "A Black History Month Conversation and Celebration" at Carnegie Hall. The event honored leaders of the New Economy who shared their experiences and outlook on the future.',
      link: "javascript:void(0)"
    },
    {
      image: "./assets/images/card-img-7.jpeg",
      title: "Tips on How to Start Your New Business",
      areaLabel: "Tips on How to Start Your New Business",
      subTitle:
        "Start the journey by following these 7 steps to turn your idea into a reality.",
      link: "javascript:void(0)"
    }
  ];

  empowermentSection.forEach(elem => {
    data += `
    <div class="box">
    <img src="${elem.image}" alt="insights card image" />
    <div class="box-content">
      <h5>${elem.title}</h5>
      <p class="">
        ${elem.subTitle}
      </p>
      <div class="btn-wrapper">
        <a href="${elem.link}" aria-label="Read the article, ${elem.areaLabel}" class="btn btn-primary d-block"
          >
          Learn More
          <span class="sr-only">, opens in new window</span>
          </a
        >
      </div>
    </div>
  </div>
    `;
  });

  document.getElementById("append-community-env").innerHTML = data;
};

const loadMoneyGrowSection = () => {
  data = "";
  const moneySection = [
    {
      image: "./assets/images/power-compounding-image.png",
      title: "The Power of Small Amounts",
      subTitle:
        "When it comes to saving and investing, it doesn't take much to get started. Use this tool to see how even a small amount can lead to big savings over time.",
      link: "javascript:void(0)",
      boxClass: "top-block"
    },
    {
      image: "./assets/images/budget-tool-image.png",
      title: "The Power of Small Amounts",
      subTitle:
        "When it comes to saving and investing, it doesn't take much to get started. Use this tool to see how even a small amount can lead to big savings over time.",
      link: "javascript:void(0)",
      boxClass: "bottom-block"
    }
  ];

  moneySection.forEach(elem => {
    data += `
    <div class="block ${elem.boxClass} d-flex">
                <div class="block-left">
                  <img src="${elem.image}" alt="Power of compounding image" />
                </div>
                <div class="block-right">
                  <h5 class="font-normal mb-0">${elem.title}</h5>
                  <p>
                    ${elem.subTitle}
                  </p>
                  <div class="d-flex">
                    <a href="${elem.link}" aria-label="Check out ${elem.title} tool" class="btn btn-primary"
                      >
                      Check out the tool
                      <span class="sr-only">, opens in new window</span>
                      </a
                    >
                  </div>
                </div>
              </div>
    `;
  });

  document.getElementById("append-money-grow").innerHTML = data;
};

const loaddeeperInsightsSection = () => {
  data = " ";
  const deeperSection = [
    {
      image: "./assets/images/card-img-1.jpeg",
      title: "5 steps closer to financial freedom",
      subTitle:
        "Get peace of mind with a personal financial plan. Gradual increases—even just an additional 1% each year—can help boost your savings",
      link: "javascript:void(0)",
      boxClass: "box-img1"
    },
    {
      image: "./assets/images/card-img-2.jpeg",
      title: "7 steps to learn how to budget",
      subTitle:
        "See how tracking expenses can help you save more. Pick the tool that's right for you, track your money, and set goals.",
      link: "javascript:void(0)",
      boxClass: "box-img2"
    },
    {
      image: "./assets/images/card-img-3.jpeg",
      title: "Considering college costs",
      subTitle:
        "Learn how understanding the price of college can help you make better decisions. The earlier you start saving, the more time your money will have to potentially grow.",
      link: "javascript:void(0)",
      boxClass: "box-img3"
    }
  ];

  deeperSection.forEach(elem => {
    data += `
          <div class="box">
              <div class="box-img ${elem.boxClass}">
                <img src="${elem.image}" alt="insights card image" />
              </div>
              <div class="box-content">
                <h5 class="font-normal">${elem.title}</h5>
                <p class="">
                  ${elem.subTitle}
                </p>
                <div class="btn-wrapper">
                  <a href="${elem.link}" aria-label="Read the article, ${elem.title}" class="btn btn-primary d-block"
                    >
                    Read the article
                    <span class="sr-only">, opens in new window</span>
                    </a
                  >
                </div>
              </div>
            </div>
`;
  });

  document.getElementById("append-deeper-insigths").innerHTML = data;
};

const loadMoneyTipsSection = () => {
  data = "";
  const tipsSection = [
    {
      image:
        "./assets/images/44802_Jamila_Voices_Balance_Spending_Poster_704x396.jpeg",
      title: "Invest in future you",
      duration: "1:18",
      boxClass: "vl1 active",
      path:
        "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/215/595/44802_Jamilla_Voices_Invest_in_Future_You_1.22_MPX_16x9.mp4"
    },
    {
      image:
        "./assets/images/44802_Jamila_Voices_Invest_on_Future_You_Poster_704x396.jpeg",
      title: "Balancing your spending",
      duration: "1:13",
      boxClass: "vl2",
      path:
        "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/211/191/44802_Jamilla_Voices_Balancing_Spending__01.17_MPX_16x9.mp4"
    },
    {
      image: "./assets/images/44802_Saunders_Family_Poster_1280x720.jpeg",
      title: "Family and finances",
      duration: "7:30",
      boxClass: "vl3",
      path:
        "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/194/598/44802_Family_Money_Talks_with_the_Saunders_5.00_MPX_16x9.mp4"
    },
    {
      image: "./assets/images/44802_How_You_Money_Poster_704x396.jpeg",
      title: "Compounding savings, not problems",
      duration: "0:44",
      boxClass: "vl4",
      path:
        "https://media.fidelity.com/assets/Fidelity_Communications_and_Advertising_VMS/1017/999/Compouding_Savings__704_396.mp4"
    }
  ];

  tipsSection.forEach((elem, index) => {
    data += `
        <div class="video-list ${elem.boxClass}" onclick="activeVideo('${elem.duration}', event, '${elem.path}')">
          <div class="thumbnail">
            <div class="thumbnail-img">
            <img
              src="${elem.image}" alt="Intro video placeholder"
            />
            </div>
            <img
            id="tip-${index}-button"
            class="tip-play-button"
            src="./assets/images/video-play-button.png"
            width="45"
            height="45"
            role="button"
            alt="play button"
            aria-label="play button"
            tabindex="0"
          />
          </div>
          <div class="v-title">${elem.title}</div>
          <div class="v-duration">${elem.duration}</div>
        </div>
    `;
  });

  document.getElementById("append-money-tips").innerHTML = data;

  /**Left side video play button */
  let btn = document.getElementById("left-video-play-btn");
  btn.addEventListener("click", function() {
    btn.style.display = "none";
    let elem = document.getElementById("video-tips");
    elem.play();
  });
};

/** Tab Section */
const activateTab = (e, id) => {
  document.getElementById("tab1").classList.remove("active");
  document.getElementById("tab2").classList.remove("active");
  document.getElementById("tab-content1").classList.remove("active");
  document.getElementById("tab-content2").classList.remove("active");

  e.target.classList.add("active");
  document.getElementById(id).classList.add("active");
};

/** Watch for more money tips */
const activeVideo = (duration, e, videoPath) => {
  const btnContainer = document.getElementById("append-money-tips");
  const btns = btnContainer.getElementsByClassName("active");
  for (var i = 0; i < btns.length; i++) {
    const current = btnContainer.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
  }
  e.currentTarget.classList.add("active");
  if (!isOverlay) {
    let btn = document.getElementById("left-video-play-btn");
    btn.style.display = "none";

    document.getElementById("left-video-duration").innerHTML = duration;

    let elem = document.getElementById("video-tips");
    elem.src = videoPath;
    elem.currentTime = 0;
    elem.play();
  } else {
    enabledOverlay(videoPath, "");
  }
};

/** Financial video */
const financialVideo = () => {
  const videoPlayer = document.getElementById("watch-video");
  const element = document.getElementById("watch-video-btn");
  const element2 = document.getElementById("play-watch-now");

  // let duration = millisToMinutesAndSeconds(videoPlayer.duration);
  // document.getElementById("watch-video-duration").innerHTML = duration;

  // Action on Watch Now button
  element.addEventListener("click", function() {
    if (!isOverlay) {
      videoPlayer.currentTime = 0;
      videoPlayer.play();
      element2.style.display = "none";
    } else {
      enabledOverlay(FINANCE_VIDEO_URL, FINANCE_POSTER_URL);
    }
  });

  // Action on Play button
  element2.addEventListener("click", function() {
    if (!isOverlay) {
      videoPlayer.play();
      element2.style.display = "none";
    } else {
      enabledOverlay(FINANCE_VIDEO_URL, FINANCE_POSTER_URL);
    }
  });
};

/** Webinar video */
const webinarVideo = () => {
  const element = document.getElementById("webinar-video-btn");
  element.addEventListener("click", function() {
    /**Pause tips video when webinar video is started */
    let vt = document.getElementById("video-tips");
    vt.pause();

    /**Pause financial video when webinar video is started */
    const fv = document.getElementById("watch-video");
    fv.pause();

    enabledOverlay(WEBINAR_VIDEO_URL, WEBINAR_POSTER_URL);
  });
};

/** Convert miliseconds to minute and seconds */
const millisToMinutesAndSeconds = millis => {
  let minutes = parseInt(millis / 60, 10);
  let seconds = millis % 60;
  return minutes + ":" + seconds.toString().split(".")[0];
};

/** Enable overlay modal small device */
const enabledOverlay = (videoPath, posterPath) => {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("lightbox").style.display = "block";
  let elem = document.getElementById("overlay-video");
  elem.src = videoPath;
  elem.poster = posterPath;
  elem.play();
};

/** Close overlay modal */
const closeOverlay = () => {
  let elem = document.getElementById("vid-close");
  elem.addEventListener("click", function() {
    resetOverlay();
  });
};

const resetOverlay = () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("lightbox").style.display = "none";
  let elem = document.getElementById("overlay-video");
  elem.src = "";
  elem.poster = "";
};

/** Reset all video when we changes screen size */
const resetAllVideo = () => {
  /**Reset tips video when webinar video is started */
  let vt = document.getElementById("video-tips");
  vt.load();

  /**Reset financial video when webinar video is started */
  const fv = document.getElementById("watch-video");
  fv.load();
};
