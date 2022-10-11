import { bubbleSort } from './bubble-sort';

test('bubble-sort', () => {
    const arr = [3, 4, 1, 2, 6, 8, 5, 9, 7];

    bubbleSort(arr);

    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
