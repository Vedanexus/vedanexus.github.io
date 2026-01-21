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
