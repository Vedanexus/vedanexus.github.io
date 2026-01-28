document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     SLIDER LOGIC
  ===================== */
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length > 0) {

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

    setInterval(() => {
      nextSlide();
    }, 4000);
  }

  /* =====================
     PRODUCTS (LAPTOP PAGE)
  ===================== */
  const API_URL = "https://vedanexus-backend.onrender.com";
  const productList = document.getElementById("productList");

  if (productList) {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(products => {
        productList.innerHTML = "";
        products.forEach(p => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
            <h3>${p.name}</h3>
            <p><strong>₹${p.price}</strong></p>
            <a class="btn" target="_blank"
               href="https://wa.me/919644272777?text=Interested in ${encodeURIComponent(p.name)}">
               Order on WhatsApp
            </a>
          `;
          productList.appendChild(div);
        });
      });
  }

});
