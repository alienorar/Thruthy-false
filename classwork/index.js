// Task 1

// let array = [2,7,4,6,3];
// let target = 10;
// let result = [];
// function getInitialOdds() {
//     for (let i = 0; i < array.length; i++) {
//         for (let g = 0; g < array.length; g++) {
//            if (array[i] + array[g] === target ) {
//             result.push(i)
//            }
            
//         } 
// }

//   console.log(result);  
// }
// getInitialOdds()

//  Task 2

function isPalindrome(num) {
let result = +num.toString().split("").reverse().join("")


  
console.log(result);

if (num === result) {
    console.log(`${num} is palindrome`);
}
    console.log(`${num} is not palindrome`);
}
isPalindrome(121)
isPalindrome(12)

// Task 1


// let weekdays = +prompt("enter number to 7");


// switch (weekdays) {
//     case 1:
//         console.log("Monday");
//         break;
// case 2:
//     console.log("Tuesday");
//     break;

//     case 3:
//         console.log("Wednesday");

//         break;

//         case 4:
//             console.log("Thursday");

//             break;

//             case 5:
//                 console.log("Friday");

//                 break;

//                 case 6:
//                     console.log("Saturday");

//                     break;

//                     case 7:
//                         console.log("Sunday");
//     default:
//         console.log("This kind of weekday doesn't exist");

//         break;
// }

// Task 2


// function getNum(operation,num1,num2) {

//     switch (operation) {
//         case "qo'sh":
//             console.log(num1 + num2);
//             break;
//     case "ayir":
//         console.log(num1 - num2);
//         default:
//             break;
//     }
// }
// getNum("qo'sh",20,30)
// getNum("ayir",20,30)



// Task 3

// let array = ["null", 1,2,0, null, 'bhb', undefined, false, ""]

// const truthyFalse = (array) =>{
    
// let truthyValues = [];
// let falseValues = [];

// for (let i = 0; i < array.length; i++) {
// if (array[i]) {

//     truthyValues.push(array[i])

// }else {
//     falseValues.push(array[i])
// }
    
// }

//     console.log(truthyValues, falseValues);

// // return{
// //     truthyValues,
// //     falseValues
// // }

// }
// truthyFalse(array)


// Task 4

// let array1 = [3,8,9,0,7]
// let array2 = [2,4,5,]


// function mergeArrays(...params) {
//     let result = []
//     result.push(...array1,...array2) 
//     result.sort((a, b) => b - a)
// console.log(result);
 
// return result;

// }
// mergeArrays(...array1,...array2)

// let array1 = [2,4,3]
// let array2 = [2,4,3]

// function compareArrays() {
//  if (array1.length !== array2.length) return false ;
    
 
// for (let i = 0; i < array2.length; i++) {
//    if (array1[i] !== array2[i]) return false; 

// }
//  return true ;
//  }

// compareArrays()