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

// todo can we create instance 1 time and change src to image every click to image
galleryArea.addEventListener('click', e => {
    e.preventDefault();
    const linkToLargeImage = e.target.dataset.source;
    basicLightbox.create(`
		<img width="1400" height="900" src="${linkToLargeImage}">
	`).show();
})
