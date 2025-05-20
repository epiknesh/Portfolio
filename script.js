document.addEventListener("DOMContentLoaded", function () {
  const projectImages = document.querySelectorAll(".project-card img");
  const overlay = document.createElement("div");
  const overlayImg = document.createElement("img");
  const closeButton = document.createElement("span");

  overlay.classList.add("image-overlay");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";

  overlay.appendChild(overlayImg);
  overlay.appendChild(closeButton);
  document.body.appendChild(overlay);

  projectImages.forEach((img) => {
    img.addEventListener("click", () => {
      overlayImg.src = img.src;
      overlay.classList.add("show");
    });
  });

  closeButton.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("show");
    }
  });

  const toggle = document.getElementById("toggleView");
  const label = document.getElementById("viewLabel");
  const grid = document.querySelector(".projects-grid");
  const slideshow = document.querySelector(".projects-slideshow");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      grid.style.display = "none";
      slideshow.style.display = "block";
      label.textContent = "Slideshow View";
    } else {
      grid.style.display = "grid";
      slideshow.style.display = "none";
      label.textContent = "Grid View";
    }
  });

  // Slide navigation
  document.getElementById("nextSlide").addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  });

  document.getElementById("prevSlide").addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  });
});
