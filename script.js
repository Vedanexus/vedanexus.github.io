// Typing text
const text = "Smart Websites. Reliable Refurbished Laptops.";
let i = 0;
const el = document.getElementById("typingText");

(function type(){
  if(i < text.length){
    el.textContent += text.charAt(i++);
    setTimeout(type, 70);
  }
})();

// Dark mode
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("successMsg").style.display = "block";
  e.target.reset();
});
const API_URL = "https://vedanexus-backend.onrender.com";

async function loadProducts() {
  try {
    const res = await fetch(`${API_URL}/api/products`);
    const products = await res.json();

    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach(p => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>Price: ₹${p.price}</p>
        <button onclick="buyNow('${p.name}', ${p.price})">
          Buy Now
        </button>
      `;
      list.appendChild(div);
    });
  } catch (err) {
    console.error(err);
  }
}

loadProducts();
async function buyNow(product, amount) {
  const res = await fetch(`${API_URL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      product,
      amount,
      paymentId: "FRONTEND_TEST"
    })
  });

  const data = await res.json();

  if (data._id) {
    alert("Order placed successfully! Invoice generated.");
  } else {
    alert("Something went wrong");
  }
}
function buyNow(product, amount) {
  const phone = "919644272777"; // apna WhatsApp number (91 ke saath)
  const message = `Hello VedaNexus,%0A
I want to order:%0A
Product: ${product}%0A
Price: ₹${amount}%0A
Please share payment details.`;

  window.open(
    `https://wa.me/${phone}?text=${message}`,
    "_blank"
  );
}
