let barsIcon = document.querySelector("#bars ");
let navBar = document.querySelector(".navbar ");


barsIcon.addEventListener("click",()=>{
    navBar.classList.toggle("active-nav");
    barsIcon.firstChild.classList.toggle("fa-times");
})



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  simulateTouch: true,
});

  var slideContainer = document.querySelector(".swiper-wrapper");
  slideContainer.addEventListener("click", function (event) {
    var clickedSlide = event.target.closest(".swiper-slide");
    if (clickedSlide) {
      var index = Array.from(swiper.slides).indexOf(clickedSlide);
      swiper.slideTo(index);
    }
  });



 let searchIcon = document.getElementById("search");
 let searchClose = document.getElementById("close-search");
  let searchPage = document.querySelector(".search-page");

  searchIcon.addEventListener("click", ()=>{
    searchPage.style.transform ="scaleX(1)";
  })
  searchClose.addEventListener("click" , ()=>{
    searchPage.style.transform ="scaleX(0)";
    navBar.classList.remove("active-nav");
  })

 
  window.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header .navbar a');
  
    function makeNavLinkActive(index) {
      navLinks.forEach((link) => {
        link.classList.remove('activelink');
      });
      navLinks[index].classList.add('activelink');
    }
  
    function checkSectionInView() {
      const scrollPosition = window.scrollY;
    
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const threshold = 50; // Adjust this value as needed
    
        if (scrollPosition >= sectionTop - threshold && scrollPosition < sectionTop + sectionHeight - threshold) {
          makeNavLinkActive(index);
        }
      });
    }
  
    window.addEventListener('scroll', checkSectionInView);
  });

  function loaderAdd (){
    let loaderContainer = document.querySelector("loader-container");
    loaderContainer.classList.add("loader-active");
  }

  function fadeOut (){
    setInterval(loaderAdd, 3000)
  }

  window.onload = fadeOut ;