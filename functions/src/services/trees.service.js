const toString = ({ x, y }) => `${y}-${x}`;

const getDivergingChildren = ({ x, y }) => [{ x, y: y + 1 }, { x: x + 1, y: y + 1 }];

const isHalfWay = (r, rounds) => r >= (rounds + 1) / 2;

const getWidth = (r, rounds) => (isHalfWay(r, rounds) ? 2 + rounds - r : 3 + r);

const getConvergingChildren = ({ x, y }, rounds) => {
  const newWidth = getWidth(y + 1, rounds);
  return [
    {
      x: (x + newWidth - 1) % newWidth,
      y: y + 1,
    },
    {
      x: x % newWidth,
      y: y + 1,
    },
  ];
};

const getTree = (rounds, getDrink) => {
  let currentRow = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];
  const tree = {
    start: { children: currentRow.map((child) => toString(child)) },
    end: { children: [] },
  };
  for (let r = 1; r < rounds; r++) {
    let nextRow = [];

    currentRow.forEach((node) => {
      const children = isHalfWay(r, rounds)
        ? getConvergingChildren(node, rounds)
        : getDivergingChildren(node);
      nextRow = nextRow.concat(children);

      tree[toString(node)] = {
        children: children.map((child) => toString(child)),
        drink: getDrink(),
      };
    });
    currentRow = nextRow;
  }

  for (let x = 0; x < 3; x++) {
    tree[toString({ x, y: rounds - 1 })] = {
      children: ['end'],
      drink: getDrink(),
    };
  }
  return tree;
};

module.exports = {
  getTree,
};
