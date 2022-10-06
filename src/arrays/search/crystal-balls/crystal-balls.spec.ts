import { crystalBalls } from './crystal-balls';

test('crystal-balls', () => {
    const arrLength = 1000;
    const breakIndex = Math.floor(Math.random() * 1000);

    const arr = new Array(1000).fill(true);

    for (let i = 0; i < breakIndex; i++) {
        arr[i] = false;
    }

    expect(crystalBalls(arr)).toEqual(breakIndex);
    expect(crystalBalls(new Array(1000).fill(false))).toEqual(-1);
});
