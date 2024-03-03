const personName = prompt('Enter your Name');
// const personAge = +prompt('Enter your Age');
const personAge = parseInt(prompt('Enter your Age')); // We can either up line code or this line code (advance from +) //
const personGender = prompt('Enter Your Gender')

const personPronoun = `${personGender === 'male' ? 'He' : 'She'}`

// if (personName) {
//   console.log(`Name : ${personName}`);
// } else if (personAge) {
//   console.log(`Age:${personAge}`);
// }

console.log(`Name : ${personName}`);
console.log(`Age:${personAge}`);
console.log(`Gender:${personGender}`);

if (personAge >= 5 && personAge <= 16) {
    console.log(`${personPronoun} is a School Student.`);
    console.log(`${personPronoun} is learning Maths`);
}

if (personAge >= 17 && personAge <= 23) {
    console.log(`${personPronoun} is a College Student.`);
    console.log(`${personPronoun} is learning javascript`);
}

if (personAge >= 24 && personAge <= 45) {
    console.log(`${personPronoun} is a working professional.`);
    console.log(`${personPronoun} is a Web Dev in essence softwares`);
}

if (personAge > 45) {
    console.log(`${personPronoun} is retired.`);
    console.log(`${personPronoun} is traveling the world`);
}

console.log("program ended!!");
