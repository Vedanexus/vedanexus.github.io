const API_URL = "https://vedanexus-backend.onrender.com";

document.getElementById("ticketForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const result = document.getElementById("ticketResult");

  const formData = new FormData(form);

  result.innerText = "Submitting ticket...";

  try {
    const res = await fetch(`${API_URL}/api/tickets`, {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (!res.ok) {
      result.innerText = "Something went wrong. Please try again.";
      return;
    }

    result.innerHTML = `
      ✅ Ticket Created Successfully <br>
      <strong>Ticket ID:</strong> ${data.ticketId} <br>
      Our team will contact you soon.
    `;

    form.reset();

  } catch (err) {
    result.innerText = "Server error. Please try later.";
  }
});
