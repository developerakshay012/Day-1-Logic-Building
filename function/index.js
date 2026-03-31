// function myfunc(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }

//   console.log(sum);
// }

// myfunc(5);

// let object = [
//   { name: "akshay", gender: "male" },
//   { name: "gourav", gender: "male" },
//   { name: "ash", gender: "male" },
//   { name: "pinki", gender: "male" },
// ];

// let allMen = object.every((item) => {
//   if (item.gender === "male") {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(allMen);
 

// setTimeout(function greet() {
//     console.log("runnning")
// } , 3000)


// write a regular function that takes a string returns it with the first later capitalized


// function capitallatter(name = "akshay"){
//     console.log(name.charAt().toUpperCase() + name.slice(1));
// } 

// capitallatter("ashu")



// function capitalLetter1(name) {
//     let result = "";

//     for (let i = 0; i < name.length; i++) {
//         let code = name[i].charCodeAt(0); // sirf charCode ke liye (logic ke liye zaroori)

//         if (i === 0 && code >= 97 && code <= 122) {
//             // first letter lowercase hai
//             result += String.fromCharCode(code - 32);
//         } else {
//             result += name[i];
//         }
//     }

//     console.log(result);
// }

// capitalLetter1("ashu");


// show an alert please login after 5 second

// setTimeout( () => {
//   console.log("please logged in kr le bhaiya");
//   alert("please loggedin again ")
// } , 5000)



// show the price after discount


// let discountedPrice = (price , discount) => {
//   let result = price - price*(discount/100)
//   return result;
// }

// let result = discountedPrice(1555 , 20)
// console.log(result);


// by default generent username 

// function generateUsername(fullName){
//    return "@#$" + fullName.toLowerCase().replaceAll(" ", "");
// }

// const result = generateUsername("Akshay");
// console.log(result);


// let color = prompt("Enter the color");
// function checkColor(color) {
//   switch (color) {

//     case 'red':
//       return "you can go";
    
//     case 'green':
//       return "you have to go with ashu";
    
//     case 'yellow':
//       return "you have to go slow";

//     default:
//       return "kuch nhi kr skta hai bhai tu";
//   }
// }

// console.log(checkColor("green"));


// switch(color){
//     case 'red':
//       console.log("you can go");
//       break;
    
//     case 'green':
//       console.log("you have to go with ashu");
//       break;
    
//     case 'yellow':
//       console.log("you have to so slow");
//       break;

//     default :
//     console.log("kuch nhi kr skta hai bhai tu");
// }