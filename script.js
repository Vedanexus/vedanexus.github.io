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
  const res = await fetch(`${API_URL}/api/products`);
  const products = await res.json();

  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image || 'https://via.placeholder.com/300x200'}" />
      <h3>${p.name}</h3>
      <p class="spec">${p.specs || 'Refurbished • Tested • Warranty'}</p>
      <div class="price">₹${p.price}</div>
      <button onclick="orderWhatsApp('${p.name}', ${p.price})">
        Order on WhatsApp
      </button>
    `;
    list.appendChild(card);
  });
}

function orderWhatsApp(name, price) {
  const phone = "919644272777";
  const msg = `Hello VedaNexus,%0AInterested in:%0A${name}%0APrice: ₹${price}`;
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
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
/* PRODUCT CARDS */
.product-card {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: transform .3s, box-shadow .3s;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.product-card img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.product-card h3 {
  margin: 10px 0 5px;
}

.product-card .spec {
  color: #666;
  font-size: 14px;
}

.product-card .price {
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
}

.product-card button {
  width: 100%;
  padding: 12px;
  background: #1f3c88;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
});

document.querySelectorAll("section, .product-card")
  .forEach(el => {
    el.classList.add("fade");
    observer.observe(el);
  });
.fade {
  opacity: 0;
  transform: translateY(30px);
  transition: all .6s ease;
}
.fade.show {
  opacity: 1;
  transform: translateY(0);
}
