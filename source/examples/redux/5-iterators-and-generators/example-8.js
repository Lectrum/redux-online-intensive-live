const isIterable = (object) => {
    return typeof object[Symbol.iterator] === 'function';
};

console.log(isIterable(new WeakSet()));