//Nav bar on scroll

window.addEventListener("scroll", function(){
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
  
});

//Theme Btn
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () =>{
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());


});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => document.body.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


//Scroll Reveals



//Scroll Reveal Common
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1500,
  
});

//Target Elements to Reavel and your options
ScrollReveal().reveal('.header .hero-container .hero-description, h2', {origin: 'left'} );
ScrollReveal().reveal('.about .container-about .about-left, .container-contato .contato-text', {delay: 400, origin: 'left'} );
ScrollReveal().reveal('.about .container-about .about-right, .container-contato .meios-contato', {delay: 200, origin: 'bottom'} );
ScrollReveal().reveal('.about .btn-about', {delay: 200, origin: 'bottom'} );

ScrollReveal().reveal('.container-skills', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.container-projects .project-box', {delay: 300, origin: 'left'} );


//copyright year
const date = new Date();
const year =date.getFullYear();
document.getElementById('year').innerHTML = year;
