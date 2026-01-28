const btn = document.getElementById("menu-btn");
      const menu = document.getElementById("mobile-menu");
      const nav = document.getElementById("navbar");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");

        if (window.innerWidth < 1024) {
          nav.classList.toggle("bg-[#e1ecde]");
          nav.classList.toggle("bg-white");
        }
});

let videoPlayed =  document.getElementById("videoDis");
let videoFrame =  document.getElementById("vdo");
let closeBtn =  document.getElementById("close");
let contentDiv =  document.getElementById("content");
let body = document.getElementById("body");
let header = document.getElementById("header"); 
let overlay = document.getElementById("overlay");
videoPlayed.addEventListener("click", () => {
    videoFrame.style.display = "block";
    contentDiv.style.display = "block";
    body.style.overflow = "hidden";
    overlay.style.display = "block";
   

});

closeBtn.addEventListener("click", () => {
    videoFrame.style.display = "none";
    contentDiv.style.display = "none";
    body.style.overflow = "auto";
    overlay.style.display = "none";
    header.style.zIndex = "50";
});
