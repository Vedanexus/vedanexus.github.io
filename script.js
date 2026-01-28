document.addEventListener("DOMContentLoaded", () => {

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");

    currentSlide = index;
  }

  window.nextSlide = function () {
    showSlide((currentSlide + 1) % slides.length);
  };

  window.prevSlide = function () {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  window.goToSlide = function (index) {
    showSlide(index);
  };

  // AUTO SLIDE
  setInterval(() => {
    nextSlide();
  }, 4000);

});
