const { getDrinks, getDrink } = require('./wetherspoons.service');

const toString = ({ x, y }) => `${y}-${x}`;
const getChildren1 = ({ x, y }) => [{ x, y: y + 1 }, { x: x + 1, y: y + 1 }];
const isHalfWay = (r, rounds) => r >= (rounds + 1) / 2;
const getWidth = (r, rounds) => (isHalfWay(r, rounds) ? 2 + rounds - r : 3 + r);
const getChildren2 = ({ x, y }, rounds) => {
  const newWidth = getWidth(y + 1, rounds);
  return [{ x: (x + newWidth - 1) % newWidth, y: y + 1 }, { x: x % newWidth, y: y + 1 }];
};

const tree = async (rounds, venueId) => {
  let currentRow = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];
  const treesObj = {
    start: { children: currentRow.map((child) => toString(child)) },
    end: { children: [] },
  };
  const allDrinks = await getDrinks(venueId);
  for (let r = 1; r < rounds; r++) {
    let nextRow = [];

    currentRow.forEach((node) => {
      const children = isHalfWay(r, rounds) ? getChildren2(node, rounds) : getChildren1(node);
      nextRow = nextRow.concat(children);

      const drink = getDrink(allDrinks, r, rounds);
      treesObj[toString(node)] = {
        children: children.map((child) => toString(child)),
        drink,
      };
    });
    currentRow = nextRow;
  }

  for (let x = 0; x < 3; x++) {
    treesObj[toString({ x, y: rounds - 1 })] = {
      children: ['end'],
      drink: getDrink(allDrinks),
    };
  }
  return treesObj;
};
module.exports = { tree };
