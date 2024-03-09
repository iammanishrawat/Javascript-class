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

// Object.seal(userOne); // it works on the if we want to add new key value pairs in object
// Object.freeze(userOne); // it works on either if we want to add new key value pairs or reassigned new value for existing key in object
// userOne.middleName = 'Singh'
// userOne.firstName = 'Maddy';

// let userName = 'Manish' //<!-------------- (@23147) --------->

// userName = 'Mannu'  //<!-----------------(@166919)---------->
