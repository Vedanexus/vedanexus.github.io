const mascot = document.getElementById("mascot");
const chatbox = document.getElementById("chatbox");
const chatMessages = document.getElementById("chatMessages");

mascot.addEventListener("click", () => {
  chatbox.style.display =
    chatbox.style.display === "flex" ? "none" : "flex";
});

/* add message */
function addMessage(text, sender = "bot") {
  const div = document.createElement("div");
  div.innerHTML = sender === "bot"
    ? `<strong>AI:</strong> ${text}`
    : `<strong>You:</strong> ${text}`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/* send message */
function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim().toLowerCase();
  if (!msg) return;

  addMessage(input.value, "user");
  input.value = "";

  setTimeout(() => {
    if (msg.includes("ticket")) {
      addMessage(`You can raise a support ticket here 👇<br>
        <a href="raise-ticket.html">Raise Ticket</a>`);
    }
    else if (msg.includes("laptop") || msg.includes("price")) {
      addMessage(`Explore our refurbished laptops 👇<br>
        <a href="laptops.html">View Laptops</a>`);
    }
    else if (msg.includes("contact") || msg.includes("call")) {
      addMessage(`You can contact us here 👇<br>
        <a href="contact.html">Contact Page</a>`);
    }
    else {
      addMessage(`I can help you with:
        <br>• Raise a ticket
        <br>• Laptop prices
        <br>• Contact support`);
    }
  }, 500);
}
setTimeout(() => {
  addMessage("Hi 👋 I'm VedaNexus AI. How can I help you today?");
}, 1500);
