/**
 * ****************************************************************************
 * Purpose: The purpose of this program to convert the Feet to Inch, Meter to 
 *          Feet and vice-versa.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 24-08-2021
 * ****************************************************************************
 */
var readLine = require('readline-sync');

let result = 0;
let val = 0;

console.log("\n1. Feet to Inch \n2. Inch to Feet \n3. Feet to Meter \n4. Meter to Feet");

let userInput = readLine.questionInt("\nSelect any option : ");
let num = readLine.questionInt("\nEnter the value you want to convert : ");

try{
    switch (userInput) {
        case 1:
            val = 12;  // 1 feet = 12 inches
            result = num * val;
            break;
        case 2:
            val = 12;
            result = num / val;
            break;
        case 3:
            val = 3.28084;  // 1 meter = 3.28084 feet
            result = num / val;
            break;
        case 4:
            val = 3.28084;
            result = num * val;
            break;
        default:
            console.log("\nInvalid Selection");
    }  
}catch{
    console.log("\nError Invalid Selection");
}


console.log("\nResult is " + result);