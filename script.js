const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const header = document.querySelector("#site-header");
let lastY = 0;

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    if (!header) return;
    if (y < 40) {
      header.classList.remove("is-hidden");
    } else if (y > lastY) {
      header.classList.add("is-hidden");
    } else {
      header.classList.remove("is-hidden");
    }
    lastY = y;
  },
  { passive: true }
);
