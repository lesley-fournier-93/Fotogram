let currentImage = 0;
let images = [
  "./img/beautiful-ocean.jpg",
  "./img/bo-kap.jpg",
  "./img/botanical_garden.jpg",
  "./img/boulders-beach.jpg",
  "./img/table_mountain_view.jpg",
  "./img/camps_bay.jpg",
  "./img/city.jpg",
  "./img/union-market.jpg",
  "./img/habour.jpg",
  "./img/harbour-city.jpg",
  "./img/lighthouse.jpg",
  "./img/lionshead.jpg",
  "./img/markethall.jpg",
  "./img/meer.jpg",
  "./img/muizenberg.jpg",
  "./img/nature.jpg",
  "./img/ocean-mountains.jpg",
  "./img/simonstown.jpg",
  "./img/sunrise-city.jpg",
  "./img/sunrise-sea.jpg",
];

function addDialog() {
  document.getElementById("dialog-overlay").classList.remove("d-none");
  document.getElementById("dialog").classList.remove("d-none");
}

function removeDialog() {
  document.getElementById("dialog-overlay").classList.add("d-none");
}

function renderDialog() {
  const dialog = document.getElementById("dialog");
  dialog.innerHTML = `

        <span class="close-btn" onclick="removeDialog()">&#10006;</span>
        <span class="prev" onclick="prevSlide()">&#10094;</span>
        <img src="${images[currentImage]}" alt="Bild ${currentImage + 1}">
        <span class="next" onclick="nextSlide()">&#10095;</span>
        <div class="counter">Capetown ${currentImage + 1} / ${
    images.length
  }</div>
    `;
}

function renderSlideShow(slideIndex) {
  currentImage = slideIndex;
  renderDialog();
}

function prevSlide() {
  currentImage = currentImage > 0 ? currentImage - 1 : images.length - 1;
  renderDialog();
}

function nextSlide() {
  currentImage = currentImage < images.length - 1 ? currentImage + 1 : 0;
  renderDialog();
}

window.onclick = function (event) {
  const overlay = document.getElementById("dialog-overlay");
  if (event.target == overlay) {
    removeDialog();
  }
};
