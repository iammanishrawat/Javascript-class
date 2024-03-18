function introduceMe(userName, userProfile, userAge) {
    // if (!userName) {
    //     userName = 'Dummy'
    // }
    console.log('Hello,');
    console.log(`My name is ${userName || 'Dummy'}`);
    console.log(`And i am a ${userProfile || 'Working Professional'}`);
    console.log(`I am ${userAge} years old`);

    // return 'Name';
}

// const returnValue = introduceMe();
introduceMe('Manish Rawat', 'Software Engineer', 29);
introduceMe('Sujeet Kumar', 'SDE3', 32);