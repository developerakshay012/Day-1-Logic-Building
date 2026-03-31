// console.time();

// print number 1 to n

// let num = Number(prompt("Enter your number.."))

// for(let i = 0; i<=num; i++){
//     console.log("nunmber is = " + i);
// }


// seconnd question 


// prinnnt number 100 to nn

// let num =  100

// for(let i = 1; i<=num; i++){
//     console.log(num-i);
// }


// prinnt all even nunmber using ternnary operator annnd if else condition 


// let number = 20;

// let result = number % 2 === 0 ? "Even number" : "Odd" 
// console.log(result);

// for(let i = 0; i<=number; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// sum of natural nunmber



// node day-1/logic1.js


//sum of natural number 

// let number = 1000000000;
// let sum = (number*(number+1)/2);

// usinng for loop
// for(let i = 0; i<=number; i++){
//     sum = sum+i;
// }
// console.log(sum);
// console.timeEnd();


// let num = 5;
// let fact = 1 ;

// for(let i = 1; i<=num; i++){
//     fact = fact * i
// }

// console.log(fact);


// sum of all even nnumbers

// let number = 5;
// let sum = 0;

// for(let i = 1 ; i<=number; i++){
//     if(i%2 === 0){
//         sum = sum+i
//     }
// }

// console.log(sum);

//square of all given number 

// let number = 10;

// for(let i = 0; i<=number; i++ ){
//     console.log(i**2);
// }


// const maxiNumber = (a, b ,c) => {
//    let max;

//    // debugger
//    if(a>=b && a>=c){
//       max = {a}
//    }else if(b>=c && b>=a){
//       max = {b}
//    }else{
//       max = {c}
//    }
//    return max
// }

// const result = maxiNumber(5,5,1);
// console.log(result);

//maximam number of three number 
// const arr = [5,10,15];

// let max = arr[0];

// for(let i = 0 ; i<arr.length; i++ ){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max);

//cheak number is positive or negative or zero


// function numCheak(num){

   // let zero;

   // if(num > 0){
      // return 'Number is positive'
      // num = zero
   // }else if(num < 0){
      // console.log("Number is negative");
      // return 'Number is Negative'
      // num = zero
   // }else{
      // return 'Number is Zero'
      // console.log("Number is zero");
      // num = zero
   // }
   
   // return zero

// }

// const result = numCheak(0)
// console.log(result);


// cheak electrycity bill  
// 0 - 100 5 per units
//101 - 200  7 per units
//201 - 300  10 per units
//avobe 300 - 12 per units 

// const units = [100 , 200 , 300]

// // const units  = 100

// for(let i = 1; i<=units; i++){
//    if(units <= 100){
//       console.log(units*5); 
//    }else if(units >= 100 || 200){
//       console.log(units*7);
//    }else if(units === 200 || 300){
//     console.log(units*10);
//    }else if(units >= 300){
//        console.log(units*12);
//    }
// }


// const result =  units.map((unit , index) => {
//    return if(unit == 100){

//    }
// })


// const num = [100 , 200 , 300];


// function calculateBill(units){
//    // console.log(units);
   
//    let total;

//    if(units <= 100){
//       total = units*5
//    }else if(units <=200){
//       total = (100*5 ) + (units-100)*7
//    }else if(units<=300){
//       total = (100*5 ) + (100*7) + (units-200)*10
//    }else{
//      total = (100*5 ) + (100*7) + (100*10) + (units-300)*12
//    }
//    return total;

// }

// const result = calculateBill(130)
// console.log(result);


// function calculateBill(units) {

//   const slabs = [
//     { limit: 100, rate: 5 },
//     { limit: 200, rate: 7 },
//     { limit: 300, rate: 10 },
//     { limit: Infinity, rate: 12 }
//   ];

//   let total = 0;
//   let prevLimit = 0;

//   for (let slab of slabs) {
//     let currentUnits = Math.min(units, slab.limit) - prevLimit;

//     if (currentUnits > 0) {
//       total += currentUnits * slab.rate;
//       prevLimit = slab.limit;
//     }

//     if (units <= slab.limit) break;
//   }

//   return total;
// }

// console.log(calculateBill(130)); // 710


// find the vowels in a str
// function findTheWordInString(string){
//    // console.log(string);
//    let count = 0;
//    let vowels = 'aeiouAEIOU'

//    for(let char of string){
//       if(vowels.includes(char)){
//          count++;
//       }
//    }

//    return count

// }

// const result = findTheWordInString("Akshay")

// console.log(result);
// function findTheVowels(str =" "){
//    // console.log(str);
//    // let vowel = ['a' , 'e' , 'i' , 'o' , 'u' , 'A' ,'E' ,'I' ,'O','U']

//    const charLowerCase = str.toLowerCase() 

//    if(
//       charLowerCase === 'a' 
//       || charLowerCase === 'e' 
//       || charLowerCase === 'i' 
//       || charLowerCase === 'o' 
//       || charLowerCase === 'u'
//    ){ 
//       return  'vowel'
//    }else if(/[a-z]/.test(charLowerCase)) { 
//       return 'Consonent'
//    }

//    return 'Not a valid alphabet'


// }

// const result = findTheVowels("A");
// console.log(result);

// function findVowel(str){

//    const charVowel = str.toLowerCase() 
//    if(
//       charVowel === 'a'||
//       charVowel === 'e'||
//       charVowel === 'i'||
//       charVowel === 'o'||
//       charVowel === 'u'
//    ){
//       return 'Vowel'
//    }else if(/[a-z]/.test(charVowel)){
//       return 'Consonent'
//    }
//     return 'Not a valid alphabet'
// }

// const result = findVowel('A');
// console.log(result);


//what you will you do if we want to find the vowels in a word

// const countThevowelsInWord = (string) => {
//    const vowel = "AEIOUaeiou"
//    let count = 0;

//    for(let str of string){
//       if(vowel.includes(str)){
//          count++;
//          console.log(`this word are present in a string ${str}..`);
//       }
   // }
        // console.log("these word are present in a string" , count);
      // }else{
      //     console.log("these word are not present in a string" , count);
      // }
   

//    return count

// }


// const result = countThevowelsInWord("akshay")
// console.log(result);



// find the leap year if year devisible by 400 and 100 and 4 


// function leapYear(year){
//    if(year % 400 === 0){
//       return true
//    }else if(year % 100 === 0){git status
//       return false
//    }else if(year % 4 === 0){
//       return false
//    }

//    return false
// }

// const result = leapYear(1900);
// console.log(result);