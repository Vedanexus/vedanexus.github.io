const mascot = document.getElementById("mascot");
const chatbox = document.getElementById("chatbox");
const chatMessages = document.getElementById("chatMessages");

let chatHistory = JSON.parse(localStorage.getItem("vdx_chat")) || [];

/* toggle chat */
mascot.onclick = () => {
  chatbox.style.display =
    chatbox.style.display === "flex" ? "none" : "flex";
};

/* add message */
function addMessage(text, sender = "bot", save = true) {
  const div = document.createElement("div");
  div.innerHTML =
    sender === "bot"
      ? `<strong>AI:</strong> ${text}`
      : `<strong>You:</strong> ${text}`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  if (save) {
    chatHistory.push({ text, sender });
    localStorage.setItem("vdx_chat", JSON.stringify(chatHistory));
  }
}

/* typing indicator */
function showTyping() {
  const t = document.createElement("div");
  t.id = "typing";
  t.innerText = "AI is typing...";
  chatMessages.appendChild(t);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return t;
}

/* quick buttons */
function quickActions() {
  addMessage(`
    👉 <a href="raise-ticket.html">🎫 Raise Ticket</a><br>
    👉 <a href="laptops.html">💻 View Laptops</a><br>
    👉 <a href="contact.html">📞 Contact Support</a>
  `);
}

/* restore chat on reload */
chatHistory.forEach(m => addMessage(m.text, m.sender, false));

/* send message */
function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim().toLowerCase();
  if (!msg) return;

  addMessage(input.value, "user");
  input.value = "";

  console.log("AI INSIGHT:", msg); // 🧠 admin insight (free)

  const typing = showTyping();

  setTimeout(() => {
    typing.remove();

    if (msg.includes("ticket") || msg.includes("complaint") || msg.includes("problem")) {
      addMessage(`Aap yahan support ticket raise kar sakte ho 👇<br>
        <a href="raise-ticket.html">Raise Ticket</a>`);
    }
    else if (msg.includes("budget") || msg.includes("under 25k")) {
      addMessage(`Best laptops under ₹25,000 👇<br>
        • Dell Latitude i5<br>
        • HP EliteBook i5<br>
        <a href="laptops.html">View Deals</a>`);
    }
    else if (msg.includes("student") || msg.includes("study")) {
      addMessage(`Students ke liye best laptops 👇<br>
        • Lenovo ThinkPad i5<br>
        • HP ProBook<br>
        <a href="laptops.html">See Options</a>`);
    }
    else if (msg.includes("laptop") || msg.includes("price")) {
      addMessage(`Refurbished laptops yahan dekhiye 👇<br>
        <a href="laptops.html">View Laptops</a>`);
    }
    else if (msg.includes("contact") || msg.includes("call")) {
      addMessage(`Humse yahan baat kar sakte ho 👇<br>
        <a href="contact.html">Contact Page</a>`);
    }
    else {
      addMessage("Please choose an option below:");
      quickActions();
    }
  }, 800);
}

/* auto greet */
setTimeout(() => {
  if (chatHistory.length === 0) {
    addMessage("Hi 👋 I'm VedaNexus AI. How can I help you today?");
  }
}, 1200);
const mascotImg = document.querySelector("#mascot img");

function setEmotion(emotion, duration = 1200) {
  mascotImg.className = "";
  mascotImg.classList.add(emotion);

  setTimeout(() => {
    mascotImg.className = "";
  }, duration);
}
