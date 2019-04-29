const iterable = {
    items: [ 1, 2, 3 ],
    *[ Symbol.iterator ]() {
        for (const item of this.items) {
            yield item;
        }
    },
};

for (const item of iterable) {
    console.log('→ item', item);
}
