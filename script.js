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
const API_URL = "http://localhost:5000";

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
