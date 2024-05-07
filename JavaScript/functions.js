console.log("hiiiiiiiiiii");

// void function
function show(){
    console.log("show function called");
}

//parameterised function
function num(){
    return 7;
}

//random function
function rand(){
    return Math.floor(6*Math.random())+1;
}

function loveCalculator(name1,name2){
    var n = Math.random()*100 + 1;
    n = Math.floor(n);
    console.log(alert("Love percentage between"+name1+" and "+name2+"is : "+n));
}

show();
console.log(num());
console.log(rand());
loveCalculator("ayush","sasana");

var s = "ayush";
s.toLowerCase();
console.error("errorrrrrr")