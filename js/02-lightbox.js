import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('ul.gallery');

const galleryItemsHtml = galleryItems.reduce((acc, galleryItem) => {
  return acc + galleryItemHTML(galleryItem);
}, '');

galleryEl.innerHTML = galleryItemsHtml;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function galleryItemHTML(galleryItem) {
  return `<li>
            <a class="gallery__link" href="${galleryItem.original}">
              <img
                class="gallery__image"
                src="${galleryItem.preview}"
                alt="${galleryItem.description}"
              />
            </a>
          </li>  
          `;
}
