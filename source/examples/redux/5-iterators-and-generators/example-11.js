const iterable = {
    items: [],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                const done = i >= this.items.length;
                const value = !done ? this.items[i++] : undefined;

                return {
                    value,
                    done,
                };
            },
        };
    },
};

iterable.items.push(1);
iterable.items.push(2);
iterable.items.push(3);

for (const item of iterable) {
    console.log(item);
}
