// const carName = prompt('Enter Car Brand Name');
// const carPrice = parseInt(prompt('Enter Price of Car'));

// if(10){
//     console.log("Print first line");
// } else{
//     console.log("print second line");
// }

// if(carName){
//     console.log(`${carName} is my favorite car`);
// }

// if(carPrice >= '10 Lakh' && carPrice <= '20 Lakh'){
//     console.log(`${carName} is budget friendly car`);
// }  else {
//     console.log(`${carName} is Sports car`);
// }


const userName = 'Manish';
const userAge = 30;

if(userName.length >= 4 && userName.length <= 6) {
    console.log(`${userName} has more than 4 letters in his name`);
    if(userName.length > 5) {
        console.log(`${userName} has exact 5 letters in his name`);
    }
} else if(userName.length > 6 && userName.length <= 8) {
    console.log(`${userName} has more than 6 letters in his name`);
}

// if(userAge > 25 && userAge <= 30) {
//     console.log('object is here');
// } 