import { mazeSolver } from './maze-solver';

test('maze-solver', () => {
    const maze = [
        'x xxxxxxxxxx',
        'x x        x',
        'x x        x',
        'x x        x',
        'x x        x',
        'x xxxxxxxx x',
        'x          x',
        'xxxxxxxxxx x',
    ];

    expect(mazeSolver(maze, 'x', { x: 1, y: 0 }, { x: 10, y: 7 })).toEqual([
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 1, y: 4 },
        { x: 1, y: 5 },
        { x: 1, y: 6 },
        { x: 2, y: 6 },
        { x: 3, y: 6 },
        { x: 4, y: 6 },
        { x: 5, y: 6 },
        { x: 6, y: 6 },
        { x: 7, y: 6 },
        { x: 8, y: 6 },
        { x: 9, y: 6 },
        { x: 10, y: 6 },
        { x: 10, y: 7 },
    ]);
});
