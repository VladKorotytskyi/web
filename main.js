/**
 * LocalStorage - місце для зберігання не приватної тимчасової інформації
 * Записати, прочитати, видалити дані з localStorage
 *
 */

// localStorage.setItem("user", "Bob");

// const dataFromLocalStorage = localStorage.getItem("user");
// consolelog(dataFromLocalStorage);

// localStorage.clear();
// localStorage.removeItem("user");

// const user = {
//     name: 'Vlad',
//     age: 13,
//     lifeIn: 'Poland',
//     animals: 'dog'
// }

// localStorage.setItem('user', JSON.stringify(user));
// const localUser = localStorage.getItem('user');
// console.log(JSON.parse(localUser));

/**
 * Створюємо доступ до елементів
 * Вішаємо слухачів подій 
 */

const textereaEl = document.querySelector('textarea');
const formEL = document.querySelector('.js-feedback-form');

textereaEl.addEventListener('input', onTextareaInput);
formEL.addEventListener('submit', onSubmit);

/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховищі
 * - Можно додати throttle
 */

function onTextareaInput(e) {
    const textareaResult = textereaEl.value
    localStorage.setItem('textareaResult', textareaResult)
}