import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('div.gallery');
galleryEl.addEventListener('click', onGalleryClick);

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

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  console.log(e.target.dataset.source);
  //   console.log('🚀 ~ file: 01-gallery.js:23 ~ onGalleryClick ~ e', e.target);
}

const newHTML = galleryItems.reduce((acc, galleryItem) => {
  return acc + galleryItemHTML(galleryItem);
}, '');

galleryEl.innerHTML = newHTML;
