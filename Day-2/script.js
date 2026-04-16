
// Right angled star pattern
// let star = 5;

// for(let i = 1; i<=star; i++){
//     let row = '';

//     for(let j = 1; j<=i; j++){
//         row += " *"
//     }
//     console.log(row);
// }

// Right angled inverted star pattern


// let row = 7;

// for(let i = 1; i<=row; i++){
//     let line = '';

//     for(let j = i; j<=row; j++){
//         line += "*"
//     }

//     console.log(line);
// }

// let row = 8;

// for(let i = row; i>=1; i--){
//     let line = '';

//     for(let j = i; j>=1; j--){
//         line += " *"
//     }
//     console.log(line);
// }


// 3 print a pyramid star pattern"


// let row = 7;

// for(let i = 1; i<=row; i++){
//     let line = ''

    //  for(let j = 1; j<=row-i; j++){
    //     line +=' '

    //  } 

    // for(let k = 1; k<=2*i-1; k++){
    //     line+= "*"
    // }
     
    // console.log(line);

//     for(let j = 1; j<=row-i; j++){
//         line+=" "
//     }

//     for(let k =1; k<=2*i-1; k++){
//         line+='*'
//     }
// console.log(line);

// }


// question no star dimond odd 

// let star = 9;

// for(let i = 1; i<=star ; i++){
//     let line = " ";

//     for(let k = 1; k<=star-i; k++){
//         line+=" "
//     }

//     for(let j = 1; j<=2*i-1; j++){
//         line+="*"
//     }
//     console.log(line);

// }

// let row = 5;

// for(let i = 1; i<=row; i++){
//     let line = '';

//     for(let j = 1; j<=row-i; j++){
//         line+=" "
//     }

//     for(let k = 1; k<=2*i-1; k++){
//         line+='*'
//     }

//     console.log(line);
// }

// for(let i = row; i>=1; i--){
//     let line = '';

//     for(let j = 1; j<=row-i; j++){
//         line+=" "
//     }

//     for(let k = 1; k<=2*i-1; k++){
//         line+='*'
//     }

//     console.log(line);
// }

// print hollow square pattern 

// let star = 5; 

// for(let i = 1; i<=star; i++){
//     let line = ''

//     for(let k = 1; k<= star; k++){
//         // line+="*"

//         if(i === 1 || i === star || k=== 1 || k === star){
//             line+="*"
//         }else {
//             line+=" "
//         }
//     }

//     console.log(line);
// }



// print hollow square pattern 

// let row = 5;


// for(let i = 1; i<=row; i++){
        
//     let star = '';

//     for(let j = 1; j<=row; j++){
//         // star+='*'/

//         if(i === 1 || i === row || j === 1 || j === row){
//             star+='*'
//         }else{
//             star+=" "
//         }
//     }

//     console.log(star);

// }

// print hollow triangle pattern 

// let row = 5;


// for(let i = 1; i<=row; i++){
        
//     let star = '';

//     for(let j = 1; j<=row-i; j++){
//         star+=' '

        // if(i === 1 || i === row || j === 1 || j === row){
        //     star+='*'
        // }else{
        //     star+=" "
        // }
//     }

//     for(let k = 1; k<=2*i-1; k++){
//         // star+='*'
//         if(i === 1 || k === 1  || ){
//               star+=' *'
//         }else{
//             star+=' '
//         }
//     }

//     console.log(star);

// }


// let star  = 6;

// for(let i = 1; i<=star; i++ ){
//     let line = '';

//     for(let j = 1; j<=star-i; j++){
//         line+=' '
//     }

//     for(let j = 1; j<=2*i-1; j++){
//         if(i === star || j === 1 || j === 2*i-1){
//              line+='*'
//          } else {
//             line += " ";
//          }
//     }


//     console.log(line);
// }

// let num = 5;

// for(let i = 1; i<=num; i++){
//     let line = ''

//     for(let j = 1; j<=i; j++){
//         line = line+ (i%2 === 1 ? j%2 : j+1%2)
//     }
//     console.log(line);

// }




// for(let i = 1; i<=num; i++){

//     let row = '';
//     for(let j = 1; j<=i; j++){
//         row = row + (i%2 === 1 ? j%2 : (j+1)%2) 
//     }
//     console.log(row);
// }


// let num = 5;

// for(let i )