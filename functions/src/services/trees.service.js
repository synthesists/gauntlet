const toString = ({ x, y }) => `${y}-${x}`;

const getDivergingChildren = ({ x, y }) => [{ x, y: y + 1 }, { x: x + 1, y: y + 1 }];

const isHalfWay = (r, rounds) => r >= (rounds + 1) / 2;

const getWidth = (r, rounds) => (isHalfWay(r, rounds) ? 2 + rounds - r : 3 + r);


const getNodeValue = (r, rounds) => {
  if (r === 1) {
    return 0;
  }
  return ((r - 1) / (rounds - 1));
};


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

const getTree = (roundsArg, getDrink) => {
  const rounds = parseInt(roundsArg, 10);
  let currentRow = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];
  const tree = {
    start: {
      children: currentRow.map((child) => toString(child)),
    },
    end: { children: [] },
  };
  for (let r = 1; r < rounds; r++) {
    let nextRow = [];

    currentRow.forEach((node, index) => {
      const children = isHalfWay(r, rounds)
        ? getConvergingChildren(node, rounds)
        : getDivergingChildren(node);
      nextRow = nextRow.concat(children);

      tree[toString(node)] = {
        children: children.map((child) => toString(child)),
        drink: getDrink(getNodeValue(r, rounds), index),
        NodeValue: getNodeValue(r, rounds),
      };
    });
    currentRow = nextRow;
  }

  for (let x = 0; x < 3; x++) {
    tree[toString({ x, y: rounds - 1 })] = {
      children: ['end'],
      drink: getDrink(getNodeValue(rounds, rounds), x),
      NodeValue: getNodeValue(rounds, rounds),
    };
  }
  return tree;
};

module.exports = {
  getTree,
};
