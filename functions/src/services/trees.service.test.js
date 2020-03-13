const tree = require('./trees.service');

test('tree of depth 1', () => {
    expect(tree(1)).toStrictEqual({
        '0-0': { children: [] },
        '0-1': { children: [] },
        '0-2': { children: [] },
    });
});

test('tree of depth 3', () => {
    expect(tree(3)).toStrictEqual({
        '0-0': { children: ['1-0', '1-1'] },
        '0-1': { children: ['1-1', '1-2'] },
        '0-2': { children: ['1-2', '1-3'] },
        '1-0': { children: ['2-2', '2-0'] },
        '1-1': { children: ['2-0', '2-1'] },
        '1-2': { children: ['2-1', '2-2'] },
        '1-3': { children: ['2-2', '2-0'] },
        '2-0': { children: [] },
        '2-1': { children: [] },
        '2-2': { children: [] },
    });

});

test('tree of depth 5', () => {
    expect(tree(5)).toStrictEqual({
        '0-0': { children: ['1-0', '1-1'] },
        '0-1': { children: ['1-1', '1-2'] },
        '0-2': { children: ['1-2', '1-3'] },
        '1-0': { children: ['2-0', '2-1'] },
        '1-1': { children: ['2-1', '2-2'] },
        '1-2': { children: ['2-2', '2-3'] },
        '1-3': { children: ['2-3', '2-4'] },
        '2-0': { children: ['3-3','3-0'] },
        '2-1': { children: ['3-0','3-1'] },
        '2-2': { children: ['3-1','3-2'] },
        '2-3': { children: ['3-2','3-3'] },
        '2-4': { children: ['3-3','3-0'] },
        '3-0': { children: ['4-2','4-0'] },
        '3-1': { children: ['4-0','4-1'] },
        '3-2': { children: ['4-1','4-2'] },
        '3-3': { children: ['4-2','4-0'] },
        '4-0': { children: [] },
        '4-1': { children: [] },
        '4-2': { children: [] },

    });
});