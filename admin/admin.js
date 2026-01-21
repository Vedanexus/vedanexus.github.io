const list = document.getElementById("list");

function saveProduct(){
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;

  const item = document.createElement("li");
  item.innerText = title + " - ₹" + price;
  list.appendChild(item);
}
