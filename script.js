let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let threshold = 0;
let isMoving = false;

document.addEventListener('touchstart', (e) => {
  let startX = e.touches[0].clientX;
  document.addEventListener('touchmove', (e) => {
    let moveX = e.touches[0].clientX;
    threshold = moveX - startX;
    if (Math.abs(threshold) > 10) {
      isMoving = true;
    }
  });
  document.addEventListener('touchend', (e) => {
    if (isMoving) {
      if (threshold > 50) {
        prevSlide();
      } else if (threshold < -50) {
        nextSlide();
      }
      isMoving = false;
    }
  });
});

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
}

// 시작화면을 1.jpg로 설정
showSlide(0);