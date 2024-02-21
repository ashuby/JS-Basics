// //Conditions(if, else, nestedif,elseif,)
// var a =4;
// if(a%2) {
//     console.log("a is odd");
// }
// else if(a==1){
//     console.log("value of a is 1");
// }
// else{
//     console.log("a is even");
// }
// //Switch case
// var b = 1;
// switch(b) {
//     case 1 :
//         console.log("value of b is 1");
//         break;
//     default :
//         console.log("b is not 1");
// }
// //For loop
// for(var i =0; i<10; i++) {
//     console.log("hello");
// }
// //While loop
// var i =4;
// while(i--) {
//     console.log(i);
// }
// //Do while
// i=10;
// do{
//     console.log(i--);
// }while(i>0)

// var obj = {
//     fname:"ashu",
//     lname:"singh",
//     email:"ashu@gmail.com"
// }

// for(var key in obj) {
//     // console.log(obj.fname);
//     console.log(obj[key]);
// }

var arr = [1,2,3,"ashu",'a'];
for(var key in arr) {
    console.log(arr[key]);
}

//ForEach
var i;
arr.forEach(i=> console.log(i));

