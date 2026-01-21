// typing
const text="Smart Websites. Reliable Refurbished Laptops.";
let i=0;
(function type(){
  if(i<text.length){
    document.querySelector(".typing").innerHTML+=text.charAt(i++);
    setTimeout(type,70);
  }
})();

// dark mode
themeToggle.onclick=()=>document.body.classList.toggle("dark");

// whatsapp product
function sendWhatsApp(p){
  window.open(`https://wa.me/91XXXXXXXXXX?text=Interested%20in%20${p}`,"_blank");
}

// form
contactForm.onsubmit=e=>{
  e.preventDefault();
  const t=`Name:${name.value}%0APhone:${phone.value}%0AService:${service.value}%0AMsg:${message.value}`;
  window.open(`https://wa.me/91XXXXXXXXXX?text=${t}`,"_blank");
  successMsg.style.display="block";
  contactForm.reset();
};
