//Hoisting function
hoistingFunction();
//Functions
//General function expression
// function generalFunction(a,b) {
//     console.log("executing fun")
//     return a-b;
// }
// console.log(generalFunction("23","1"));

// var a = [1,2,3];
// var b = [4,5,6];

// if(a===b) {
//     console.log("a is having same data type as of b");
// }
// else{
//     console.log("a is not having same data type as of b");
// }

//Anonymous function
// (function(a,b,c){
//     console.log(a+b+c)
// })(1,2,3)

// var myFunction = function() {
//     console.log("This is an anonymous function.");
// };

// Using an anonymous function as an argument
// setTimeout(function() {
//     console.log("This is executed after 10 second.");
// }, 10000);

// console.log(((a,b) => a+b)(1,23));

//Recursive function
// function factorial(a) {
//     if(a==0) return 1;
//     return a*(factorial(a-1));
// }

// console.log(factorial(5))

// const factorial = (n) => (n==0 || n==1) ? 1 : n*(factorial(n-1));
// console.log(factorial(5))

//Functional Hoisting
function hoistingFunction() {
    console.log("It's an hoisting function")
}
