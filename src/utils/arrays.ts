export function loopFor(times, callback: (number) => void) {
    for (let index = 0; index < times; index++) {
        callback(index);
    }
}

export function mapFor<T>(times, callback: (index: number) => T) {
    const results: T[] = [];
    for (let index = 0; index < times; index++) {
        results.push(callback(index));
    }
    return results;
}

export function toMap<K,V>(array: V[], callback: (item: V) => K) {
    return array.reduce((map, item) => {
        const key = callback(item);
        map.set(key, item);
        return map;
    }, new Map<K,V>());
}
