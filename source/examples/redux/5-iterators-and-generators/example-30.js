function* createIterator() {
    const first = yield 1; // step 1
    const second = yield first + 2; // step 2

    const third = yield second + 3; // step 3
    yield third;
}

const iterator = createIterator();

console.log(iterator.next()); // step 1 → value: 1
console.log(iterator.next(4)); // step 2 → value: 4 + 2
console.log(iterator.next(5)); // step 3 → value: 5 + 3
console.log(iterator.next(6));
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
