document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! VedaNexus will contact you shortly.");
  this.reset();
});
