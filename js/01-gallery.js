import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const div = document.querySelector('.gallery');
const newGallery = createGallery(galleryItems);
let imgOrg;

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
        .join("");
}

div.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    imgOrg = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="500" height="500">`,
        {
            onShow: () => {
                window.addEventListener("keydown", closeModal);
            },
            onClose: () => {
                window.removeEventListener('keydown', closeModal);
            },
        }
    );
    imgOrg.show();
});

function closeModal(event) {
    if (event.code !== "Escape") {
        return;
    }
    imgOrg.close();
}

