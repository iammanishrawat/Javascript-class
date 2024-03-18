console.log('Program Starts');

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

const friendsName = ['Manish', 'Akash', 'Arijit', 'Sujeet', 'Rahul', 'Dude'];

let i = 0;
while (i < friendsName.length) {
  friendsName[i] = friendsName[i] + ' Procodrr'
  console.log(`${i+1}. ${friendsName[i]}`);
  i++;
}

console.log('Program Ends');
