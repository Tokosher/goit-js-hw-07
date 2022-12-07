import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageHTMLElements = galleryItems.map(imageInfo => {
    return `<div class="gallery__item">
                <a class="gallery__link" href="${imageInfo.original}">
                    <img class="gallery__image" src="${imageInfo.preview}" alt="${imageInfo.description}" data-source="${imageInfo.original}">
                </a>
            </div>`
}).join('');

const galleryArea = document.querySelector('.gallery');
galleryArea.insertAdjacentHTML('afterbegin', imageHTMLElements);

galleryArea.addEventListener('click', e => {
    e.preventDefault();

    const linkToLargeImage = e.target.dataset.source;
    if (!linkToLargeImage) return;

    const imageInstance = basicLightbox.create(`<img width="1400" height="900" src="${linkToLargeImage}">`, {
        onShow: () => {
            document.addEventListener('keydown', closeImageHandler)
        },
        onClose: () => {
            document.removeEventListener('keydown', closeImageHandler);
        }
    })

    imageInstance.show();

    function closeImageHandler (e) {
        if (e.key !== 'Escape') return;
        imageInstance.close();
    }
})
