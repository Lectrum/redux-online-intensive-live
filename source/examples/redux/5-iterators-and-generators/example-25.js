/**
 * Это — функция-генератор, generator function.
 */
function* createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

/**
 * Это — итератор «Generator».
 */
const iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
