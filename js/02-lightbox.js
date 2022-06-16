import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const div = document.querySelector('.gallery');
const newGallery = createGallery(galleryItems);

div.insertAdjacentHTML('beforeend', newGallery);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  scrollZoom: false,
  disableRightClick: true,
});
