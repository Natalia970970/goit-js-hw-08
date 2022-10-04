import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

let images = galleryItems;

const imgCard = ({preview, original, description}) => 
    `<a class="gallery__item" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
        />
    </a>`;

const gallery = document.querySelector('.gallery');

const render = () => {
    const list = images.map((item) => imgCard(item)).join('');
    
    gallery.insertAdjacentHTML('beforeend', list);
};

render();

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryItems);
