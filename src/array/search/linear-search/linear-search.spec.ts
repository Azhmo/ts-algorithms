import { linearSearch } from './linear-search';

test('linear search array', () => {
    const foo = [1, 2, 3, 4, 5, 6, 1202];

    expect(linearSearch(foo, 2)).toEqual(true);
    expect(linearSearch(foo, 1202)).toEqual(true);
    expect(linearSearch(foo, 7)).toEqual(false);
});
