// const dayNumber = 0;

// if (dayNumber === 0) {
//   console.log(`it's Sunday`);
// } else if (dayNumber === 1) {
//   console.log(`it's Monday`);
// } else if (dayNumber === 2) {
//   console.log(`it's Tuesday`);
// } else if (dayNumber === 3) {
//   console.log(`it's Wednesday`);
// } else if (dayNumber === 4) {
//   console.log(`it's Thursday`);
// } else if (dayNumber === 5) {
//   console.log(`it's Friday`);
// } else if (dayNumber === 6) {
//   console.log(`it's Saturday`);
// } else {
//   console.log(`Please enter a valid number for day print`);
// }







// const dayNumber = parseInt(prompt('Please enter a valid day number'));

// switch (dayNumber) {
//   case (0):
//     console.log(`it's Sunday`);
//     break;
//   case (1):
//     console.log(`it's Monday`);
//     break;
//   case (2):
//     console.log(`it's Tuesday`);
//     break;
//   case (3):
//     console.log(`it's Wednesday`);
//     break;
//   case (4):
//     console.log(`it's Thursday`);
//     break;
//   case (5):
//     console.log(`it's Friday`);
//     break;
//   case (6):
//     console.log(`it's Saturday`);
//     break;
//   default:
//     console.log(`Please enter a valid number for day print`);
// }






// const personName = 'Manish Rawat';
// const personAge = 29;

// switch (true) {
//   case (personAge >= 5 && personAge <= 16):
//     console.log(`${personName} is a School Student.`);
//     console.log(`He / She is learning Maths`);
//     break;

//   case (personAge >= 17 && personAge <= 23):
//     console.log(`${personName} is a School Student.`);
//     console.log(`He / She is learning Maths`);
//     break;

//   case (personAge >= 24 && personAge < 45):
//     console.log(`${personName} is a working professional.`);
//     console.log(`He / She is a Web Dev`);
//     break;

//   case (personAge > 45):
//     console.log(`${personName} is retired.`);
//     console.log(`He / She is traveling the world`);
//     break;

//   default:
//     console.log(`There is no matching age in the data`);
// }






const grade = 'B';

switch(grade){
  case('A'):
  console.log(`Your score between 86% to 100%`);
  break;
  case('B'):
  console.log(`Your score between 70% to 85%`);
  break;
  case('C'):
  console.log(`Your score between 55% to 69%`);
  break;
  case('D'):
  console.log(`Your score between 40% to 54%`);
  break;
  case('E'):
  console.log(`Your score between 33% to 39%`);
  break;
  default:
    console.log(`Sorry, You are failed`);
}

console.log('Program now ended!!');