//Hoist
// hoist = 111;
console.log(hoist);
//DataTypes
var a = 10;
var b = 1.23;
var c = 23.45;
var d = 'a';
var e = "ashu";
var f = true;
var g = [1,'a',"singh"];
var h = {fname:"ashu", lname:"singh"};
//Scope of variables
//Global scope
var i = "Global scope variable";
function globalScope(){
    console.log(i);
    var j = "Local scope variable j";
}
// console.log(j);
globalScope();
//Block Space
{
    //Block Variable
    let k = 234;
    var  k1 = 2344;
    k1 = 33;
    const k2 = 2341;
    // k2 = 234445;
}
// console.log(k);
console.log(k1);
// console.log(k2);
//Lexical Scope
//Hoisting
var hoist ;

