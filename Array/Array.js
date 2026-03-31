// let arrr = ["akshay" , "akshay" , 34 , 909  , 90 , 909]
// console.log(arrr);


// // let arr2 = ["akhay" , "manash", "ashu "]

// let result = arr2.some((item) => {
//     if(item.trim() === "ashu"){
//         return true
//     }
// })

// console.log(result);

// let arr = [20];

// let arrr4 = new Array(20).fill("ashu")

// console.log(arr , arrr4);



// let arrr =  [34,56,67,78,90];
// console.log(arrr , arrr.length);
// let result = arrr.push(899);
// console.log(result , result.length);

// let b = arrr.pop()
// console.log(b);
// console.log(arrr);

// arrr.shift();
// console.log(arrr);

// console.log(arrr);

// let newarr = arrr.slice(1,3)

// arrr.splice(3,2, 90 ,98 ,909 ,90)


// console.log(arrr);

// let heros = ["ironman" , "hulk" , "wanda" , "thor"]
// heros.sort()
// console.log(heros);

// arrr.sort((a,b) => a-b);
// console.log(arrr);

// question one that is find average marks of entire class

// let marks = [25,50,75,100];

// let result = marks.reduce((acc , curr) => {
//     return acc+curr;
// })

// let avarage = result/marks.length

// console.log(`result = ${result}  avarage is ${avarage}`);

// question 2

// let n = 25;
// let arr = new Array(25).fill(0);

// console.log(arr);

// question 3

// let n = 25;
// let arr = new Array(25).fill(0)

// let result = arr.forEach((item , index) => {
//     arr[index] = index+1;
// })

// console.log(result);

// question 4

// let arr = ["ironman" , "captain" , "black widow" ,
//      "wonda" , "hulk" , "black panther"]

// arr.push("spiderman")
// arr.unshift("thor")

// arr.splice(4,1 , "hawkeye")

// console.log(arr);

 

// arr.splice(4,1 , "hawkeye")

// console.log( 
// arr.includes("captain") , arr);
// console.log(arr.includes("captain") , arr);


// let test = "akshay";
// console.log(Array.isArray(test));
// console.log(Array.from(test));


// const array1 = [1, 2, 3];
// const notArray = { name: 'example' };
// console.log(array1 instanceof Array);
// console.log(notArray instanceof Object);



// let a = 1;
// let b = "akshay"
// let c = {
//     name:"ashu"
// } 

// let d = [1 , 2 , 3]

// console.log(Array.of(a,b,c,d));


// let str = "hello"
// let str2 = Array.from(str).reverse().join()
// console.log(str2);

// str.split()
// console.log(str );

// console.log(str2);
// let arr = [1 ,2 , 3];

// let result = str.reverse()

// console.log(result);


// let str = "hello how are you man";

// let result = str.split(" ").map((elem , index) => {
//     return elem.charAt(0).toUpperCase() + elem.slice(1)

// })

// //node array.js

// const final = result.join(" ")

// console.log(final);


// let str = "how are you ashu what are you doing";

// let result = "";
// let capitalizeNext = true;

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     // if character is space
//     if (ch === " ") {
//         result += ch;
//         capitalizeNext = true;
//     } 
//     else {
//         if (capitalizeNext && ch >= 'a' && ch <= 'z') {
//             // convert lowercase to uppercase manually
//             result += String.fromCharCode(ch.charCodeAt(0) - 32);
//             capitalizeNext = false;
//         } else {
//             result += ch;
//             capitalizeNext = false;
//         }
//     }
// }

// console.log(result);


//captlized

let str = 'how are you radhe'

let result = str.split(' ').map((elem ) => {
   return  elem.charAt(0).toUpperCase() + elem.slice(1)
})

let finalString = result.join(" ");

console.log(finalString);