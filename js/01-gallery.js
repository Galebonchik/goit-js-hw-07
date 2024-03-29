import { galleryItems } from './gallery-items.js';
// Change code below this line
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. 
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

const paletteGalery = document.querySelector(`.gallery`);
const cardsOfGallery = createGallery(galleryItems);

paletteGalery.insertAdjacentHTML(`beforeend`, cardsOfGallery);

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <ul class="gallery">
            <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                ></img>
             </a>
            </li>
        </ul>`
    }).join(``);
};
 
paletteGalery.addEventListener(`click`, onImgClick);

function onImgClick(event) {
  blockStandartAction(event);
  if (event.target.nodeName !== 'IMG') {
    return
    };

  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" >
  `);
  
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    } 
    console.log(event.code);
  });
  
}

function blockStandartAction (event) {
  event.preventDefault()
};

console.log(galleryItems);



