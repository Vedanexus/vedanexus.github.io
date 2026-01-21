// Typing effect
const text = "Smart Websites. Reliable Refurbished Laptops.";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

// Dark mode
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// WhatsApp from laptop cards
function sendWhatsApp(product) {
  window.open(
    `https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20${product}`,
    "_blank"
  );
}

// Contact form WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const msg = document.getElementById("message").value;

  const text = `Name: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${msg}`;

  window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");

  document.getElementById("successMsg").style.display = "block";
  this.reset();
});
