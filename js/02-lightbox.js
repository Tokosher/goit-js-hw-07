import {galleryItems} from './gallery-items.js';
// Change code below this line

const wrappedImageElements = [];

galleryItems.forEach(item => {
    const linkElement = document.createElement('a');
    linkElement.classList.add('gallery__item');
    linkElement.href = item.original;

    const previewImgElement = document.createElement('img');
    previewImgElement.classList.add('gallery__image');
    previewImgElement.src = item.preview;
    previewImgElement.alt = item.description;
    linkElement.insertAdjacentElement('afterbegin', previewImgElement);

    wrappedImageElements.push(linkElement);
})

const galleryArea = document.querySelector('.gallery');
galleryArea.append(...wrappedImageElements);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
