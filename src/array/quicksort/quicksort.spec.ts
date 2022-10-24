import { quicksort } from './quicksort';

test('quicksort', () => {
    const arr = [1, 6, 7, 3, 8, 4, 5, 9, 2];

    quicksort(arr);

    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
