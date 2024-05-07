
// prompt("Enter your name :");
// prompt("Enter their name :");

// var n = Math.random()*100 + 1;
//     n = Math.floor(n);
//     alert("Love percentage between"+name1+" and "+name2+" is : "+n);

// if(n>70){
//     alert("Your love score is :"+n+"like a loves a");
// }else{
//     alert("Your love score is :"+n);
// }


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  rl.question('Enter your partner\'s name: ', (partnerName) => {
    const loveScore = Math.random() * 100;
    console.log(`${name} and ${partnerName}'s love score is ${loveScore.toFixed(2)}%`);
    rl.close();
  });
});