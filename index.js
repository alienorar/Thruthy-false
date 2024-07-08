// Task 1

// let number = +prompt("Enter number")

// const countSum = (number) => {

//     number = Array.from(String(number), Number)
//     let sum = number.reduce((a, b) => a + b)
//     alert(sum)
// }
// countSum(number)

// Task 2

// const countArray = (...numbers) => {
//     let result = []
//     let count = 0;
//     console.log(numbers);
//     for (let i = 0; i < numbers.length; i++) {
//         count = count + numbers[i]
//     }
//     result.push(count)
//     result = Array.from(String(result), Number)
//     console.log(result);
// }
// countArray(10, 6, 100)


// Task 3

// let number = +prompt("Enter number");
// let deg = 2;
// let num_degree = number ** 2;
// function isPalindrome(number) {
//     if (num_degree > 10) {

//         let result = +num_degree.toString().split("").reverse().join("")
//         console.log(result);
//         if (num_degree === result) {
//             alert(`Square of ${number} is palindrome`);
//         } else {
//             alert(`Square of ${number} is not palindrome`);
//         }

//     } else {
//         alert("Enter only numbers which squares are double-spaced")
//     }

// }

// isPalindrome(number);

// Task 4

function mainFunc (secondFunc) {
 
}
mainFunc(secondFunc)

function secondFunc() {
    let result = []
    let random_number = parseInt(Math.random() * 100)
    console.log(random_number);
    result.push(random_number)
    result = Array.from(String(result), Number)
    let sum = result.reduce((a, b) => a + b)
    console.log(sum);

}
secondFunc()

