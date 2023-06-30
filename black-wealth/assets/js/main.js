const activateTab = (e, id) => {
  document.getElementById("tab1").classList.remove("active");
  document.getElementById("tab2").classList.remove("active");
  document.getElementById("tab-content1").classList.remove("active");
  document.getElementById("tab-content2").classList.remove("active");

  e.target.classList.add("active");
  document.getElementById(id).classList.add("active");
};

const activeVideo = (e) => {
  const btnContainer = document.getElementById("vr");
  const btns = btnContainer.getElementsByClassName("active");
  for (var i = 0; i < btns.length; i++) {
    const current = btnContainer.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
  }
  e.currentTarget.classList.add("active");
};
