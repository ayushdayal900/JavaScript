var i = 1;
var arr = [];

function Fizbuz() {

    while (i < 101) {
        if ((i % 5 === 0) && (i % 3 === 0)) { arr.push("FizzBuzz"); }
        else if (i % 3 === 0) { arr.push("Fizz"); }
        else if (i % 5 === 0) { arr.push("Buzz"); }

        else { arr.push(i); }
        i++;
    }
    console.log(arr);

}




// for(var i=1; i<101; i++){
//     if(i%3==0){console.log("Fizz")}
//     else if(i%5==0){console.log("Buzz")}
//     else if((i%3==0) && (i%3==0)) {console.log("FizzBuzz")}
//     else{console.log(i)}
// }