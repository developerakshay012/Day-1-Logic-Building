// let car = {
//     name:'toyota',
//     brand:"suzuki",
//     "full name":"Akshay",
//     speed:189,
//     start:() => {
//         console.log('this car will be start after 5 second');
//     },
//     stop:function(){
//         console.log("this car is stopped now");
//     }
// }


// car['full name']

// let test = 'full name'

// console.log(car[test]);

// console.log(car);
// console.log(car.brand);

 //create an array constructor and fill with zero
 
//  let newArr = new Array(25).fill(0);
 
//  newArr.forEach((item, index) => {
//      newArr[index] = index+1
//  })
 
//  console.log(newArr)
 
 
 //ek array hai jisme kuch name hai jese ek or kuch add krna hai starting name
 
// let arr = ["ironman" , "thor", "hulk" , "spiderman", "wanda"];

// arr.push( "spiderman")
// arr.unshift("blackWidow")
// arr.splice(3,1 , "captainAmerica")
// let result = arr.includes("thor")

// console.log(arr)
// console.log(result)

// how to cheak if a given problem is array or not and how can we convert other dataype into array


// let str = 5 ;

// let result = Array.isArray(str)
// console.log(Array.from(str))

// console.log(result)

// let a = "akshay"
// let b = "aditya"
// let c = {
//     name:"bhoskar"
// }

// let d = [5 , 10 ,15]

// console.log(Array.of(a,b,c,d))


// cheak if a string palindrome or not

// let str = "lol";

// str.map((item , index) => {

// })

// if(str === "")

// let str = "ollo"

// let reverseStr = str.split("").reverse().join("");

// if(str === reverseStr){
//     console.log("string is palindrome");
// }else{
//     console.log("string is not palindrome");
// }


// console.log(reverseStr);

// function for valid palidrome in  a string
// function validPalindrome(str){ 
//     let left = 0;
//     let right = str.length - 1;

//     while(left < right){
//         if(str[left] !== str[right]){
//             return false
//         }
//         left++;
//         right--;
//     }
//     return true
// }

// const result = validPalindrome("ollo");
// console.log(result);

// function for valid palidrome

// function validPalindromeNum(num){
//     let original = num;
//     let reversed = 0;

//     while(num > 0){
//         let lastDigit = num % 10;
//         reversed = reversed * 10+ lastDigit
//         num = (num/10) | 0;

//     }

//     return original === reversed    
// }

// const result = validPalindromeNum(231)
// console.log(result);
// console.log(validPalindromeNum(121));

//captlized the every latter in a sentence

// let words = 'how are you akshay brother'

// const reulst = words.split(' ').map((elem) => {
//   return elem.charAt(0).toUpperCase() + elem.slice(1)
// })

// reulst.Array()

// console.log(reulst);

// let car = {
//     brand:"bmw370",
//     speed:180,
//     color:"green",
//     "full name":"Akshay kumar",
//     stop:() => {
//         console.log("stoping the cars...") //method or behaviour
//     },
//     start:function(){
//         console.log("starting the cars...");
//     }

// }

// car.start()
// car['start']()
// car.stop()
// car['stop']()

// const test = "full name"

// console.log(car.brand);
// console.log(car['brand']);
// console.log(car.speed);
// console.log(car['speed']);
// console.log(car.color);
// console.log(car['color']);
// console.log(car[test]);

// console.log(car);


// const obj = {
//     name:"akshay",
//     brand:"bwm"
// }
// obj.color = "green"
// obj.age = 19;

// console.log(obj);    

// const  person = {
//     name:"Akshay ",
//     age:19,
//     city:"khagaria"
// }

// for(let key in person){
//     console.log(`values of${key} of ${person[key]}..`)
// }


// const person = {
//     name:"Akshay",
//     age:20,
//     city:"khagaria"
// }

// person.email = "72akshay@gmail.com"

// delete person.city

// for(let key in person){
//     console.log(`values of ${key} is ${person[key]}`);
// }


// n

// for(let key in name){
//     console.log(`fullName is ${name[key]}`);
// }

// const name = {
//     firstName:"Akshay",
//     middleName:"Kumar",
//     lastName:"Gupta"
// }

// function convertFullname(params){
//     return `fullName is that ${params.firstName} ${params.middleName} ${params.lastName}`
// }

// const result = convertFullname(name);
// console.log(result);

//create an object and cheak the length of the given object 

// const obj = {
//     name:"Akshay",
//     age:24,
//     city:"khagaria"
// }

// let key = Object.values(obj).length
// console.log(key);

//write a funtion that returns an array of names of  users who have the role of admin 

const obj = [
    {name:"Akshay",role:"admin"},
    {name:"mukesh",role:"student"},
    {name:"anuj",role:"teacher"},
    {name:"sonu",role:"instructor"}
]

const result = obj.filter((item) =>{
    // if(item.role === "admin"){
    //     return `this inndex is admin ${item.role}`
    // }/
    return item.role === 'admin'
})

console.log(result);