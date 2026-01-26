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


