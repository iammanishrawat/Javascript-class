const fruitBasketOne = [
  'Apple',
  'Banana',
  'Peach',
  'Mango',
  'Orange',
  'Grapes',
  'Pumpkin',
  'Guava',
  'Lichi',
  'Melon',
];

// const fruitBasketTwo = [fruitBasketOne];

// (1). object.assign() for swallow copy of arrays
// const fruitBasketTwo = [];
// Object.assign(fruitBasketTwo, fruitBasketOne);
// fruitBasketTwo.push('Chiku');

// (2). spread operator for swallow copy of arrays
// const fruitBasketTwo = [...fruitBasketOne];
// fruitBasketTwo.push('Chiku');

// (3). [].concat() for swallow copy of arrays
// const fruitBasketTwo = [].concat(fruitBasketOne)
// fruitBasketTwo.push('Chiku');

// (4). var.slice() for swallow copy of arrays
// const fruitBasketTwo = fruitBasketOne.slice();
// fruitBasketTwo.push('Chiku');

const userOne = {
  firstName: 'Manish',
  lastName: 'Rawat',
  age: 29,
  location: {
    city: 'New Delhi',
    pinCode: 110045,
    state: 'Delhi',
    moreDetails: {
      populations: 70000000,
      area: '4500 Sq Kms',
    },
  },
};

// const userTwo = { ...userOne };
const userTwo = JSON.parse(JSON.stringify(userOne))
userTwo.firstName = 'Mannu';
userTwo.location.city = 'Pune';
userTwo.location.pinCode = 400121;
userTwo.location.state = 'MH';
userTwo.height = '5 ft 7 inch';
