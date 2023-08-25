let currentSlide = 1;
const totalSlides = 3;

function showSlide(slideIndex) {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function prevSlide() {
  currentSlide -= 1;
  if (currentSlide < 1) {
    currentSlide = totalSlides;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide += 1;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);
