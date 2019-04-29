function* createIterator() {
    const first = yield 1;
    let second = null;

    try {
        second = yield first + 2; // 7
    } catch ({ message }) {
        console.log('Error:', message);
        second = 6;
    }

    yield second + 3; // 1 + 3 || 6 + 3
}

const iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(5));
console.log(iterator.throw(new Error('generator error')));
console.log(iterator.next(1));
