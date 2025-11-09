document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("toggle-theme");
  const body = document.body;

  if (toggle) {
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    });
  }

  const hamburger = document.getElementById("ham");
  const navi = document.getElementById("navi");

  if (hamburger && navi) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navi.classList.toggle("active");
    });
  }

  const animElements = document.querySelectorAll(".fade-in, .slide-up");
  if (animElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    animElements.forEach((el) => observer.observe(el));
  }

  const mover = document.querySelector(".mover");
  if (mover) {
    mover.addEventListener("mouseover", () => {
      mover.style.transform = `translate(${Math.random() * 120 - 60}px, ${
        Math.random() * 60 - 30
      }px) scale(1.2)`;
    });

    mover.addEventListener("mouseout", () => {
      mover.style.transform = "translate(0, 0) scale(1)";
    });
  }

  const modal = document.getElementById("contactModal");
  const openBtn = document.querySelector(".open-modal-btn");
  const closeBtn = document.getElementById("closeModal");

  if (modal && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => modal.classList.add("show"));
    closeBtn.addEventListener("click", () => modal.classList.remove("show"));

    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("show");
    });
  }
});
