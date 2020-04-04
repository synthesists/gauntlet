const requestPromise = require('request-promise');

const getVenues = () => requestPromise('https://static.wsstack.nn4maws.net/v1/venues/en_gb/venues.json', { json: true });

const flatten = (arrays) => [].concat(...arrays);

const drinksCategoriesToAvoid = [
  'Hot drinks',
  'Soft drinks',
  'Low & alcohol free',
  'Includes a drink',
];

const firstRoundDrinks = [
  'Draught craft',
  'Draught lager & beer',
  'Draught & bottled cider',
  'Real ale',
];

const lastRoundDrinks = [
  'Cocktails',
  'Any 3 for £5',
  'Liqueur & brandy',
  'Prosecco & sparkling',
];

const getDrinkValue = (drinkCategory) => {
  let drinkValue;
  if (firstRoundDrinks.includes(drinkCategory)) {
    drinkValue = 0;
  } else if (lastRoundDrinks.includes(drinkCategory)) {
    drinkValue = 1;
  } else {
    drinkValue = (Math.floor((Math.random() * 100)) / 100);
  }
  return drinkValue;
};

const processDrinksResponse = (response) => {
  const drinksMenu = response.menus.find((element) => element.name === 'Drinks');
  const drinksSubMenus = drinksMenu.subMenu;
  const drinksFilter = drinksSubMenus
    .filter((subMenu) => !drinksCategoriesToAvoid.includes(subMenu.headerText));
  let drinks = [];
  drinksFilter.forEach((subMenu) => {
    const drinkCategory = `${subMenu.headerText}`;
    const drinksInCategory = flatten(
      flatten(subMenu.productGroups)
        .map(({ products }) => products),
    );
    drinksInCategory.forEach((products) => {
      products.drinkCategory = drinkCategory;
      products.drinkValue = getDrinkValue(drinkCategory);
    });
    drinks = drinks.concat(drinksInCategory);
  });
  return {
    drinks,
  };
};

const getDrinks = async (venueId) => {
  const response = await requestPromise(`https://static.wsstack.nn4maws.net/content/v1/menus/${venueId}.json`, { json: true });
  const drinksObj = processDrinksResponse(response);
  return drinksObj.drinks;
};

const getDrink = (drinks, roundValue, offset = 0) => {
  const sortedDrinks = drinks.sort(
    (a, b) => Math.abs(a.drinkValue - roundValue) - Math.abs(b.drinkValue - roundValue),
  );
  return sortedDrinks[offset];
};

module.exports = {
  getVenues,
  getDrinks,
  getDrink,
  processDrinksResponse,
};

