console.log("jojoojo");

const activateTab = (e, id) => {
    console.log(e);

    document.getElementById("tab1").classList.remove("active");
    document.getElementById("tab2").classList.remove("active");
    document.getElementById("tab-content1").classList.remove("active");
    document.getElementById("tab-content2").classList.remove("active");
    
    e.target.classList.add("active");
    document.getElementById(id).classList.add("active");
} 