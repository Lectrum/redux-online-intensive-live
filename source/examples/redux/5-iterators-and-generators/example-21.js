const arr = [...new Array(5).keys()];
// new Array(5) → [undefined,undefined,undefined,undefined,undefined]
// [undefined,undefined,undefined,undefined,undefined].keys() → Iterable {}
// ...Iterable {} → 0,1,2,3,4
// 0,1,2,3,4 → [0,1,2,3,4]
console.log(arr);


// Для Set
// const values = [...collection.values()];

// Для Map
// const values = [...collection.values()];
// const keys = [...collection.keys()];