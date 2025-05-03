
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

// Auto change
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000); // Change image every 3 seconds

// Initial show
showSlide(currentSlide);

// Parallax + Scale on scroll
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    slides.forEach(slide => {
        slide.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.00005})`;
    });
});



    window.addEventListener('scroll', () => {
      const parallaxImages = document.querySelectorAll('.parallax-image');
  
      parallaxImages.forEach(image => {
        const speed = 0.8; // Change this to control effect speed
        const offset = window.scrollY;
        const rect = image.getBoundingClientRect();
        const parentTop = rect.top + window.scrollY;
        const yPos = (window.scrollY - parentTop) * speed;
  
        image.style.transform = `translateY(${yPos}px)`;
      });
    });

    const goTopBtn = document.getElementById("goTopBtn");

    window.onscroll = function () {
      // Detect if user is near the bottom of the page
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 10) {
        goTopBtn.classList.add("show");
      } else {
        goTopBtn.classList.remove("show");
      }
    };

    goTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
 
   





