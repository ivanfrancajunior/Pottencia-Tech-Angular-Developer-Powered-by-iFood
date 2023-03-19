function concatArray<T>(...items: T[]): T[]{
    return new Array().concat(...items);
}

const numArray = concatArray<number[]>([1, 2], [3])
const strArray = concatArray<string[]>(['a', 'b'], ['c']) 

