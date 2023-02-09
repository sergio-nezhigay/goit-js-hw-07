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

function openLightbox(link) {
  const instance = basicLightbox.create(`
    <img src="${link}" class="lightbox" >
`);
  instance.show();
  return instance;
}

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  const instance = openLightbox(e.target.dataset.source);

  document.addEventListener('keydown', onEscapePressed);

  function onEscapePressed(e) {
    if (e.key === 'Escape') {
      console.log('escaped...');
      instance.close();
      document.removeEventListener('keydown', onEscapePressed);
    }
  }
}

const newHTML = galleryItems.reduce((acc, galleryItem) => {
  return acc + galleryItemHTML(galleryItem);
}, '');

galleryEl.innerHTML = newHTML;
