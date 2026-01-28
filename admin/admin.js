async function addProduct() {
  await fetch("https://vedanexus-backend.onrender.com/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_ADMIN_TOKEN"
    },
    body: JSON.stringify({
      name: name.value,
      price: price.value,
      image: image.value
    })
  });
  alert("Product added");
}
