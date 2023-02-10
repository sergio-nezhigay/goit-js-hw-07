import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('div.gallery');

const galleryItemsHtml = galleryItems.reduce((acc, galleryItem) => {
  return acc + galleryItemHTML(galleryItem);
}, '');

galleryEl.innerHTML = galleryItemsHtml;

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  openLightbox(e.target.dataset.source);
}

function galleryItemHTML(galleryItem) {
  return `<div class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
              <img
                class="gallery__image"
                src="${galleryItem.preview}"
                data-source="${galleryItem.original}"
                alt="${galleryItem.description}"
              />
            </a>
          </div>`;
}

function openLightbox(link) {
  const instance = basicLightbox.create(`
    <img src="${link}" class="lightbox" >
`);
  instance.show();
  // add on Escape key press handler
  if (instance.visible()) {
    document.addEventListener('keydown', onEscapePressed);
    function onEscapePressed(e) {
      if (e.key === 'Escape') removeLightboxAndHandler(instance, onEscapePressed);
    }
  }
}

function removeLightboxAndHandler(instance, functionToRemove) {
  instance.close();
  document.removeEventListener('keydown', functionToRemove);
}
