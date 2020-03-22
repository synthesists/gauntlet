const requestPromise = require('request-promise');

const getVenues = () => requestPromise('https://static.wsstack.nn4maws.net/v1/venues/en_gb/venues.json', { json: true });

const flatten = (arrays) => [].concat(...arrays);

const getDrinks = async (venueId) => {
  const drinksCategoriesToAvoid = ['Hot drinks', 'Soft drinks', 'Low & alcohol free', 'Includes a drink'];
  const response = await requestPromise(`https://static.wsstack.nn4maws.net/content/v1/menus/${venueId}.json`, { json: true });
  const drinksObjs = response.menus.find((element) => element.name === 'Drinks')
    .subMenu.filter((x) => !drinksCategoriesToAvoid.includes(x.headerText));
  const drinks = flatten(
    flatten(
      drinksObjs.map(({ productGroups }) => productGroups),
    )
      .map(({ products }) => products),
  );
  return drinks;
};

const getDrink = (drinks) => {
  const drink = drinks[Math.floor(Math.random() * drinks.length)];
  return drink;
};


module.exports = {
  getVenues,
  getDrinks,
  getDrink,
};
