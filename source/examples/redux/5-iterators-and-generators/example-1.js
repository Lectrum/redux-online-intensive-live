/* Массив — это итерируемая коллекция (Iterable). */
const numbers = [ 1, 2, 3 ];

for (const number of numbers) {
    console.log(number);
}

/* Объект — это не итерируемая коллекция (Non-iterable). */
const obj = {
    name:    'jack',
    country: 'usa',
};

for (const key in obj) {
    console.log(key);
}
