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
