const API_URL = "https://vedanexus-backend.onrender.com";

async function loadProducts() {
  const res = await fetch(`${API_URL}/api/products`);
  const products = await res.json();

  const list = document.getElementById("productList");
  if (!list) return;

  list.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="order('${p.name}', ${p.price})" class="btn">
        Order on WhatsApp
      </button>
    `;
    list.appendChild(div);
  });
}

function order(name, price) {
  const phone = "919644272777";
  const msg = `Hello VedaNexus,%0AProduct: ${name}%0APrice: ₹${price}`;
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

loadProducts();
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000); // change every 4 seconds
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function goToSlide(index) {
  showSlide(index);
}

/* AUTO SLIDE */
if (slides.length > 0) {
  setInterval(nextSlide, 4000);
}
/* ===== SLIDER LOGIC ===== */

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function goToSlide(index) {
  showSlide(index);
}

if (slides.length > 0) {
  setInterval(nextSlide, 4000);
}

/* ===== HERO TYPING TEXT ===== */

const texts = [
  "Smart IT Solutions for Modern Businesses",
  "Certified Refurbished Laptops with Warranty",
  "Affordable Technology for Startups"
];

let textIndex = 0;
let charIndex = 0;
const typingEl = document.querySelector(".typing");

function typeText() {
  if (!typingEl) return;

  if (charIndex < texts[textIndex].length) {
    typingEl.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 60);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingEl.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 40);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 500);
  }
}

typeText();
