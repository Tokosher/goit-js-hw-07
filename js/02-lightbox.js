import {galleryItems} from './gallery-items.js';
// Change code below this line

const wrappedImageHTMLElements = galleryItems.map(imageInfo => {
    return `<a class="gallery__item" href="${imageInfo.original}">
                <img class="gallery__image" src="${imageInfo.preview}" alt="${imageInfo.description}">
            </a>`
}).join('');

const galleryArea = document.querySelector('.gallery');
galleryArea.insertAdjacentHTML('afterbegin', wrappedImageHTMLElements);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
