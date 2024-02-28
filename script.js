window.addEventListener('scroll', function() {
  const navbar = document.querySelector('header');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var tl = gsap.timeline();

tl.from("nav",{
  delay:.3,
  y:-100,
})

tl.from("#right img",{
  y:100,
  scale:.3,
  opacity:0

})

tl.from("h1, #left p,.btn, .social-proof",{
  y:100,
  scale:.3,
  opacity:0
})

tl.from("#right img",{
  duration:1,
  repeat:-1,
  yoyo:true
})
