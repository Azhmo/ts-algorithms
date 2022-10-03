import { binarySearch } from './binary-search';

test('binary-search', () => {
    const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    expect(binarySearch(foo, 2)).toEqual(true);
    expect(binarySearch(foo, 14)).toEqual(true);
    expect(binarySearch(foo, 16)).toEqual(false);
});
