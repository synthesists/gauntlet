const { getTree } = require('./trees.service');

const getDrink = () => 'drink';

test('tree of depth 1', () => {
  expect(getTree(1, getDrink)).toStrictEqual({
    start: { children: ['0-0', '0-1', '0-2'] },
    '0-0': { children: ['end'], drink: 'drink' },
    '0-1': { children: ['end'], drink: 'drink' },
    '0-2': { children: ['end'], drink: 'drink' },
    end: { children: [] },
  });
});

test('tree of depth 3', () => {
  expect(getTree(3, getDrink)).toStrictEqual({
    start: { children: ['0-0', '0-1', '0-2'] },
    '0-0': { children: ['1-0', '1-1'], drink: 'drink' },
    '0-1': { children: ['1-1', '1-2'], drink: 'drink' },
    '0-2': { children: ['1-2', '1-3'], drink: 'drink' },
    '1-0': { children: ['2-2', '2-0'], drink: 'drink' },
    '1-1': { children: ['2-0', '2-1'], drink: 'drink' },
    '1-2': { children: ['2-1', '2-2'], drink: 'drink' },
    '1-3': { children: ['2-2', '2-0'], drink: 'drink' },
    '2-0': { children: ['end'], drink: 'drink' },
    '2-1': { children: ['end'], drink: 'drink' },
    '2-2': { children: ['end'], drink: 'drink' },
    end: { children: [] },
  });
});

test('tree of depth 5', () => {
  expect(getTree(5, getDrink)).toStrictEqual({
    start: { children: ['0-0', '0-1', '0-2'] },
    '0-0': { children: ['1-0', '1-1'], drink: 'drink' },
    '0-1': { children: ['1-1', '1-2'], drink: 'drink' },
    '0-2': { children: ['1-2', '1-3'], drink: 'drink' },
    '1-0': { children: ['2-0', '2-1'], drink: 'drink' },
    '1-1': { children: ['2-1', '2-2'], drink: 'drink' },
    '1-2': { children: ['2-2', '2-3'], drink: 'drink' },
    '1-3': { children: ['2-3', '2-4'], drink: 'drink' },
    '2-0': { children: ['3-3', '3-0'], drink: 'drink' },
    '2-1': { children: ['3-0', '3-1'], drink: 'drink' },
    '2-2': { children: ['3-1', '3-2'], drink: 'drink' },
    '2-3': { children: ['3-2', '3-3'], drink: 'drink' },
    '2-4': { children: ['3-3', '3-0'], drink: 'drink' },
    '3-0': { children: ['4-2', '4-0'], drink: 'drink' },
    '3-1': { children: ['4-0', '4-1'], drink: 'drink' },
    '3-2': { children: ['4-1', '4-2'], drink: 'drink' },
    '3-3': { children: ['4-2', '4-0'], drink: 'drink' },
    '4-0': { children: ['end'], drink: 'drink' },
    '4-1': { children: ['end'], drink: 'drink' },
    '4-2': { children: ['end'], drink: 'drink' },
    end: { children: [] },
  });
});

test('tree of depth 3 (given as a string)', () => {
  expect(getTree('3', getDrink)).toStrictEqual({
    start: { children: ['0-0', '0-1', '0-2'] },
    '0-0': { children: ['1-0', '1-1'], drink: 'drink' },
    '0-1': { children: ['1-1', '1-2'], drink: 'drink' },
    '0-2': { children: ['1-2', '1-3'], drink: 'drink' },
    '1-0': { children: ['2-2', '2-0'], drink: 'drink' },
    '1-1': { children: ['2-0', '2-1'], drink: 'drink' },
    '1-2': { children: ['2-1', '2-2'], drink: 'drink' },
    '1-3': { children: ['2-2', '2-0'], drink: 'drink' },
    '2-0': { children: ['end'], drink: 'drink' },
    '2-1': { children: ['end'], drink: 'drink' },
    '2-2': { children: ['end'], drink: 'drink' },
    end: { children: [] },
  });
});
