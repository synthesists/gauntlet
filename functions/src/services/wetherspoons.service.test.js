const { processDrinksResponse, getDrink } = require('./wetherspoons.service');

// const expectedDrinkGenerator = (drinkName, numberOfDrinks) => {
//   const drinks = [];
//   for (let i = 0; i < numberOfDrinks; i++) {
//     const drink = { displayName: `${drinkName}: ${i}` };
//     drinks.push(drink);
//   }
//   return drinks;
// }

const draughtCraft = [
  { displayName: 'Shipyard American Pale Ale' },
  { displayName: 'Hop House 13 Lager' },
  { displayName: 'BrewDog Punk IPA' },
];
const cider = [
  { displayName: 'cider1' },
  { displayName: 'cider2' },
  { displayName: 'cider3' },
];
const cocktails = [
  { displayName: 'cocktail1' },
  { displayName: 'cocktail2' },
  { displayName: 'cocktail3' },
];
const expectedDraughtCraft = [
  { displayName: 'Shipyard American Pale Ale',
    drinkCategory: 'Draught craft',
    drinkValue: 0 },
  { displayName: 'Hop House 13 Lager',
    drinkCategory: 'Draught craft',
    drinkValue: 0 },
  { displayName: 'BrewDog Punk IPA',
    drinkCategory: 'Draught craft',
    drinkValue: 0 },
];
const expectedCider = [
  { displayName: 'cider1',
    drinkCategory: 'Draught & bottled cider',
    drinkValue: 0 },
  { displayName: 'cider2',
    drinkCategory: 'Draught & bottled cider',
    drinkValue: 0 },
  { displayName: 'cider3',
    drinkCategory: 'Draught & bottled cider',
    drinkValue: 0 },
];
const expectedCocktail = [
  { displayName: 'cocktail1',
    drinkCategory: 'Cocktails',
    drinkValue: 1 },
  { displayName: 'cocktail2',
    drinkCategory: 'Cocktails',
    drinkValue: 1 },
  { displayName: 'cocktail3',
    drinkCategory: 'Cocktails',
    drinkValue: 1 },
];

const response = {
  menus: [
    {
      name: 'Drinks',
      subMenu: [
        {
          headerText: 'Draught craft',
          productGroups: [{
            products: draughtCraft,
          }],
        },
        {
          headerText: 'Draught & bottled cider',
          productGroups: [{
            products: cider,
          }],
        },
        {
          headerText: 'Cocktails',
          productGroups: [{
            products: cocktails,
          }],
        },
        { headerText: 'Hot drinks' },
        { headerText: 'Soft drinks' },
        { headerText: 'Low & alcohol free' },
        { headerText: 'Includes a drink' },
      ],
    },
  ],
};

const drinks = [
  ...expectedDraughtCraft,
  ...expectedCocktail,
  ...expectedCider,
];



test('processDrinksResponse(response)', () => {
  expect(processDrinksResponse(response)).toStrictEqual({
    drinks: [
      ...expectedDraughtCraft,
      ...expectedCider,
      ...expectedCocktail,
    ],
  });
});

test('getDrink with roundValue of 0.75, 3 nodes)', () => {
  for (let x = 0; x < 3; x++) {
    expect(getDrink(drinks, 0.75, x)).toStrictEqual({
      ...expectedCocktail[x],
    });
    console.log(expectedCocktail[x]);
  }
});

test('getDrink with roundValue of 0.25, 5 nodes)', () => {
  const concatArray = expectedDraughtCraft.concat(expectedCider);
  for (let x = 0; x < 5; x++) {
    expect(getDrink(drinks, 0.25, x)).toStrictEqual({
      ...concatArray[x],
    });
    console.log(concatArray[x]);
  }
});


// test('processDrinksResponse(response)', () => {
//   expect(processDrinksResponse(response)).toStrictEqual({
//     round1Drinks: expectedRound1Drinks,
//     round2Drinks: expectedRound2Drinks,
//     round3Drinks: [...expectedRound3Drinks, ...expectedRound4Drinks],
//     round4Drinks: [...expectedRound4Drinks, ...expectedRound3Drinks, ...expectedRound2Drinks],
//     drinks: [
//       ...expectedRound1Drinks,
//       ...expectedRound2Drinks,
//       ...expectedRound3Drinks,
//       ...expectedRound4Drinks,
//     ],
//   });
// });

// describe('1 round', () => {
//   it('should pick ciders and ales for the first and only round', () => {
//     expect(processDrinksResponse(response, 1)).toStrictEqual({
//       round1Drinks: expectedRound1Drinks,
//     });
//   });
// });
