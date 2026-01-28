<<<<<<< HEAD
<<<<<<< HEAD
const btn = document.getElementById("menu-btn");
=======

      const btn = document.getElementById("menu-btn");
>>>>>>> a21b0e8a50bc4d88081da20570837cf26bd88c3a
=======
const btn = document.getElementById("menu-btn");
>>>>>>> 92cbc735a6d3d09e11eb87d38b0c467908d01e5c
      const menu = document.getElementById("mobile-menu");
      const nav = document.getElementById("navbar");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");

        if (window.innerWidth < 1024) {
          nav.classList.toggle("bg-[#e1ecde]");
          nav.classList.toggle("bg-white");
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 92cbc735a6d3d09e11eb87d38b0c467908d01e5c
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
<<<<<<< HEAD
<<<<<<< HEAD
});

=======
});
>>>>>>> ccb2ce2b07d5d737529032f680f4802f03270ecc
=======
      });
>>>>>>> a21b0e8a50bc4d88081da20570837cf26bd88c3a
=======
});
>>>>>>> 92cbc735a6d3d09e11eb87d38b0c467908d01e5c
