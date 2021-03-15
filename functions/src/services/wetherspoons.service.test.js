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
  {
    displayName: 'Shipyard American Pale Ale',
    description: '4.5% ABV, 2.6 units',
  },
  {
    displayName: 'Hop House 13 Lager',
    description: '5.0% ABV, 2.8 units',
  },
  {
    displayName: 'BrewDog Punk IPA',
    description: '5.4% ABV, 3.1 units',
  },
];
const cider = [
  {
    displayName: 'cider1',
    description: '4.0% ABV, 2.3 units',
  },
  {
    displayName: 'cider2',
    description: '4.0% ABV, 2.3 units',
  },
  {
    displayName: 'cider3',
    description: '4.5% ABV, 2.6 units',
  },
];
const cocktails = [
  { displayName: 'cocktail1' },
  { displayName: 'cocktail2' },
  { displayName: 'cocktail3' },
];

const expectedDraughtCraft = [
  {
    displayName: 'Shipyard American Pale Ale',
    description: '4.5% ABV, 2.6 units',
    drinkCategory: 'Draught craft',
    drinkValue: 0,
    drinkUnits: 2.6,
  },
  {
    displayName: 'Hop House 13 Lager',
    description: '5.0% ABV, 2.8 units',
    drinkCategory: 'Draught craft',
    drinkValue: 0,
    drinkUnits: 2.8,
  },
  {
    displayName: 'BrewDog Punk IPA',
    description: '5.4% ABV, 3.1 units',
    drinkCategory: 'Draught craft',
    drinkValue: 0,
    drinkUnits: 3.1,
  },
];
const expectedCider = [
  {
    displayName: 'cider1',
    description: '4.0% ABV, 2.3 units',
    drinkCategory: 'Draught & bottled cider',
    drinkValue: 0,
    drinkUnits: 2.3,
  },
  {
    displayName: 'cider2',
    description: '4.0% ABV, 2.3 units',
    drinkCategory: 'Draught & bottled cider',
    drinkValue: 0,
    drinkUnits: 2.3,
  },
  {
    displayName: 'cider3',
    description: '4.5% ABV, 2.6 units',
    drinkCategory: 'Draught & bottled cider',
    drinkValue: 0,
    drinkUnits: 2.6,
  },
];
const expectedCocktail = [
  {
    displayName: 'cocktail1',
    drinkCategory: 'Cocktails',
    drinkValue: 1,
    drinkUnits: 4,
  },
  {
    displayName: 'cocktail2',
    drinkCategory: 'Cocktails',
    drinkValue: 1,
    drinkUnits: 4,
  },
  {
    displayName: 'cocktail3',
    drinkCategory: 'Cocktails',
    drinkValue: 1,
    drinkUnits: 4,
  },
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

test('getDrink with NodeValue of 0.75, 3 nodes)', () => {
  for (let x = 0; x < 3; x++) {
    expect(getDrink(drinks, 0.75, x)).toStrictEqual({
      ...expectedCocktail[x],
    });
  }
});

test('getDrink with NodeValue of 0.25, 5 nodes)', () => {
  const concatArray = expectedDraughtCraft.concat(expectedCider);
  for (let x = 0; x < 5; x++) {
    expect(getDrink(drinks, 0.25, x)).toStrictEqual({
      ...concatArray[x],
    });
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
