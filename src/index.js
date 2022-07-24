import './style.css';

const images = document.querySelectorAll('.image');
const imagesArray = [...images];
const dots = document.querySelectorAll('.dot');
let slideIndex = 1;

function showSlides(n) {
  let i;

  if (n > imagesArray.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = imagesArray.length; }
  for (i = 0; i < imagesArray.length; i += 1) {
    imagesArray[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].classList.remove('active');
  }
  imagesArray[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
for (let i = 0; i < dots.length; i += 1) {
  dots[i].addEventListener('click', (e) => {
    currentSlide(i + 1);
  });
}
function changeButton() {
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  leftButton.addEventListener('click', (e) => {
    plusSlides(-1);
  });
  rightButton.addEventListener('click', (e) => {
    plusSlides(1);
  });
}
changeButton();
setInterval(() => {
  plusSlides(1);
}, 15000);
