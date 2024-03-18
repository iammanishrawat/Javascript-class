// const foo = () => {
//   console.log(this.name);
// };
// foo.call({ name: 'Manish' });

// console.log([1,2] == [1,2])

// const arrayOne = [1, 2];
// const arrayTwo = [1, 2];

// console.log(arrayOne == arrayTwo);

const string1 = `Hello my name is manish rawat`;

const string2 = string1.split(' ');

// string2.map((newString) => {
//   return newString[0].toUpperCase() + newString.substring(1);
// }).join(" ");

const finalSentence = string2.map((newString) => {
    return newString[0].toUpperCase() + newString.substring(1);
  }).join(" ");
  

console.log(finalSentence);