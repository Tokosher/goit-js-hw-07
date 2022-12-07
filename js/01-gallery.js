import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageElements = [];

galleryItems.forEach(item => {
    const divAreaForImage = document.createElement('div');
    divAreaForImage.classList.add('gallery__item');

    const linkElement = document.createElement('a');
    linkElement.classList.add('gallery__link');
    linkElement.href = item.original;
    divAreaForImage.insertAdjacentElement('afterbegin', linkElement);

    const previewImgElement = document.createElement('img');
    previewImgElement.classList.add('gallery__image');
    previewImgElement.src = item.preview;
    previewImgElement.dataset.source = item.original;
    previewImgElement.alt = item.description;
    linkElement.insertAdjacentElement('afterbegin', previewImgElement);

    imageElements.push(divAreaForImage);
})

const galleryArea = document.querySelector('.gallery');
galleryArea.append(...imageElements);

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
