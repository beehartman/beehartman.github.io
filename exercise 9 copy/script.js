
const images = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

images.forEach(image => {
  image.addEventListener('click', function () {
    modal.style.display = 'block';
    modalImg.src = this.src;  
    captionText.innerHTML = this.alt; 
  });
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});