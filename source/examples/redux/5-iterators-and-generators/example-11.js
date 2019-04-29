/**
 * Итерируемая сущность выглядит вот-так.
 * Этот объект соответствует протоколу «Итерируемый» (Iterable Protocol).
 */
const iterable = {
    items: [ 1, 2, 3 ],
    [ Symbol.iterator ]() {
        let i = 0;

        /**
         * Возвращаемый объект соответствует протоколу «Итератор» (Iterator protocol).
         */
        return {
            next: () => {
                const done = i >= this.items.length;
                const value = !done ? this.items[ i++ ] : undefined;

                console.log('→ iterating...');

                return {
                    value,
                    done,
                };
            },
        };
    },
};

for (const item of iterable) {
    console.log(item);
}
