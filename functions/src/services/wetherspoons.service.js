const requestPromise = require('request-promise');

const getVenues = () => requestPromise('https://static.wsstack.nn4maws.net/v1/venues/en_gb/venues.json', { json: true });

const flatten = (arrays) => [].concat(...arrays);

const drinksCategoriesToAvoid = [
  'Hot drinks',
  'Soft drinks',
  'Low & alcohol free',
  'Includes a drink',
  'Any 2 for £5',
  'Any 3 for £5',
];

const firstRoundDrinks = [
  'Draught craft',
  'Draught lager & beer',
  'Draught & bottled cider',
  'Real ale',
];

const lastRoundDrinks = [
  'Cocktails',
  // 'Any 3 for £5',
  'Liqueur & brandy',
  'Prosecco & sparkling',
];

const processUnits = (drinkDescription) => {
  const unitsRegeX = /\d+([\.]\d+)\s/;
  const unitString = unitsRegeX.exec(drinkDescription);
  const unitStringTrim = unitString[0].trim();
  const units = parseFloat(unitStringTrim);
  return units;
};

const getDrinkUnits = (drinkDescription, drinkCategory) => {
  if (drinkCategory === 'Any 2 for £5') {
    return (processUnits(drinkDescription) * 2);
  }
  if (drinkCategory === 'Any 3 for £5') {
    return (processUnits(drinkDescription) * 3);
  }
  if (drinkDescription === undefined) {
    if (drinkCategory === 'Gin') {
      return 1;
    }
    if (drinkCategory === 'Wine') {
      return 3;
    }
    if (drinkCategory === 'Cocktails') {
      return 4;
    }
  }
  return processUnits(drinkDescription);
};

const getDrinkValue = (drinkCategory) => {
  if (firstRoundDrinks.includes(drinkCategory)) {
    return 0;
  } if (lastRoundDrinks.includes(drinkCategory)) {
    return 1;
  }
  return Math.random();
};

const subMenuProcessor = (subMenu) => {
  const drinkCategory = `${subMenu.headerText}`;
  const drinksInCategory = flatten(
    flatten(subMenu.productGroups)
      .map(({ products }) => products),
  )
    .map((products) => {
      products.drinkCategory = drinkCategory;
      products.drinkValue = getDrinkValue(drinkCategory);
      products.drinkUnits = getDrinkUnits(products.description, drinkCategory);
      return products;
    });
  return drinksInCategory;
};

const processDrinksResponse = (response) => {
  const drinksMenu = response.menus.find(({ name }) => name === 'Drinks');
  const drinksSubMenus = drinksMenu.subMenu;
  const validDrinks = drinksSubMenus
    .filter((subMenu) => !drinksCategoriesToAvoid.includes(subMenu.headerText));
  // eslint-disable-next-line max-len
  const drinks = validDrinks.reduce((accumulator, subMenu) => accumulator.concat(subMenuProcessor(subMenu)), []);
  return { drinks };
};

const getDrinks = async (venueId) => {
  const response = await requestPromise(`https://static.wsstack.nn4maws.net/content/v1/menus/${venueId}.json`, { json: true });
  const { drinks } = processDrinksResponse(response);
  return drinks;
};

const getDrink = (drinks, NodeValue, offset) => {
  const sortedDrinks = drinks.sort(
    (a, b) => Math.abs(a.drinkValue - NodeValue) - Math.abs(b.drinkValue - NodeValue),
  );
  return sortedDrinks[offset];
};

module.exports = {
  getVenues,
  getDrinks,
  getDrink,
  processDrinksResponse,
};
