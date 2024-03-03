const personName = prompt('Enter your Name') || 'Procodrr';
// const personAge = +prompt('Enter your Age');
const personAge = parseInt(prompt('Enter your Age') || 22); // We can either up line code or this line code (advance from +) //

console.log(`Name : ${personName}`);
console.log(`Age:${personAge}`);

if (personAge >= 5 && personAge <= 16) {
    console.log(`${personName} is a School Student.`);
    console.log(`He / She is learning Maths`);
}

if (personAge >= 17 && personAge <= 23) {
    console.log(`${personName} is a College Student.`);
    console.log(`He / She is learning javascript`);
}

if (personAge >= 24 && personAge <= 45) {
    console.log(`${personName} is a working professional.`);
    console.log(`He / She is a Web Dev`);
}

if (personAge > 45) {
    console.log(`${personName} is retired.`);
    console.log(`He / She is traveling the world`);
}

console.log("program ended!!");