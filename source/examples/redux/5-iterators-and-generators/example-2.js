const numbers = [ 1, 2, 3 ];
/**
 * Итератор — это функция, у которой нет аргументов.
 * И она возвращает объект с особым интерфейсом.
 **/
const iterator = numbers[ Symbol.iterator ]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
