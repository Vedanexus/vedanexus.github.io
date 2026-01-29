const mascot = document.getElementById("mascot");
const chatbox = document.getElementById("chatbox");
const chatMessages = document.getElementById("chatMessages");

mascot.onclick = () => {
  chatbox.style.display =
    chatbox.style.display === "flex" ? "none" : "flex";
};

function addMessage(text, sender = "bot") {
  const div = document.createElement("div");
  div.innerHTML = sender === "bot"
    ? `<strong>AI:</strong> ${text}`
    : `<strong>You:</strong> ${text}`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.toLowerCase();
  if (!msg) return;

  addMessage(input.value, "user");
  input.value = "";

  // 🧠 RULE-BASED INTELLIGENCE
  setTimeout(() => {
    if (msg.includes("ticket")) {
      addMessage(`You can raise a support ticket here 👇<br>
        <a href="raise-ticket.html">Raise Ticket</a>`);
    }
    else if (msg.includes("laptop") || msg.includes("price")) {
      addMessage(`Check our refurbished laptops here 👇<br>
        <a href="laptops.html">View Laptops</a>`);
    }
    else if (msg.includes("contact") || msg.includes("call")) {
      addMessage(`You can contact us directly 👇<br>
        <a href="contact.html">Contact Page</a>`);
    }
    else {
      addMessage(`I can help you with:
        <br>• Tickets
        <br>• Laptops
        <br>• Contact support`);
    }
  }, 600);
}
