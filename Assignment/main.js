"use strict";
// Assignment
// Q1:check if the number is:
//  - Even or Odd.
//  - Positive, Negative, or Zero.
//  - Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.
//-Even or odd
//method 1
// var num1 = 17;
// if (num1%3 == 0){               
//     console.log("Even"); 
// }else {
//     console.log("odd");
// };
// num1%3 == 0 ---> 1 == 0 ---> false
// //method 2
// var num2 = 24;
// if (num2/2){        
//     console.log("Its even");
// }else {
//     console.log("Its odd");
// };
// num2/2 ----> 12 (completely divisible by 2) ---> true 
//  - Positive, Negative, or Zero.
// var num3:number = -35;
// if(num3>0){
//     console.log("This is positive number");
// } else if (num3<0){
//     console.log("This is negative number");
// } else if (num3==0){
//     console.log("This is zero");
// } else {
//     console.log("invalid number");
// };
// -ve numbers <--------------0------------->+ve numbers, (greater than 0 = 1,2,3,.....), (less than 0 = -1, -2, -3, .....), (equal to 0 = neutral/zero)
//  - Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.
//method 1 using division method:
// var num4 = 19;
// if (num4/2 && num4/3){
//     console.log("Divisible by both 2 & 3");
// } else if (num4/2){
//     console.log("Divisible by 2");
// }else if (num4/3){
//     console.log("Divisible by 3");
// }else if (num4!/2 && num4!/3){
//     console.log("Not divisible by both 2 & 3");
// }else {
// console.log("invalid number");
// };
//method 2 by using modulus method:
// var num5 = 70;
// if (num5%2 == 0 && num5%3 == 0){
//     console.log("Divisible by both");
// } else if (num5%2 == 0){
//     console.log("Divisible by 2");
// }else if (num5%3 == 0){
//     console.log("Divisible by 3");
// } else if (num5!%2 == 0 && num5!%3 == 0){
//     console.log("Not divisible by 2 & 3");
// } else{
//     console.log("invalid number");
// }
// Q2:
//  - Take the user age.
//   -- If the age is 18 or above:
//   -- Ask if they have a nationality of "Pakistani".
//     ---If yes, print "You are eligible to vote."
//     ---If no, print "Please obtain a valid ID to vote."
// var age = 26;
// var nationality = "Pakistani";
// if (age>=18 && nationality == "Pakistani"){
//     console.log("You are eligible to vote.");
// } else {
//     console.log("Please obtain a valid ID to vote.");
// };
// Q3:
//  - Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)
// var userage = 48;
// if (userage>=0 && userage<=12){
//     console.log("Child");
// } else if(userage>=13 && userage<=19){
//     console.log("teanager");
// } else if(userage>=20 && userage<=59){
//     console.log("Adult");
// } else if (userage>=60 && userage <=100){
//     console.log("Senior Citizen");
// } else {
//     console.log("invalid age");
// };
// Q4:
//  - Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.
//  - Check if a year is a leap year or not.
// var month = 4;
// var year = 2018;
//  if (month==1){
//   console.log("number of days in month 1 or January is 31.");
//  }
//  else if (month==2){
//   console.log("number of days in month 2 or February is 28.");
//  } 
//  else if (month==3){
//   console.log("number of days in month 3 or March is 31.");
//  }
//  else if (month==4){
//   console.log("number of days in month 4 or April is 30.");
//  }
//  else if (month==5){
//   console.log("number of days in month 5 or May is 31.");
//  }
//  else if (month==6){
//   console.log("number of days in month 6 or June is 30.");
//  }
//  else if (month==7){
//   console.log("number of days in month 7 or July is 31.");
//  }
//  else if (month==8){
//   console.log("number of days in month 8 or August is 31.");
//  } 
//  else if (month==9){
//   console.log("number of days in month 9 or September is 30.");
//  }
//  else if (month==10){
//   console.log("number of days in month 10 or October is 31.");
//  }
//  else if (month==11){
//   console.log("number of days in month 11 or November is 30.");
//  }
//  else if (month==12) {
//   console.log("number of days in month 12 or December is 31.");
//  }
//  else { console.log("Number of month is not valid.")};
//  - Check if a year is a leap year or not.
//Method 1
// let year = 2012;
// if (year%400 == 0){
//     console.log("2012 is a Leap year");
// } else if (year%4 == 0){
//     console.log("2012 is a leap year");
// } else if (year%100 !==0){
//     console.log("2012 is not a leap year");
// } else {
//     console.log("invalid year");
// };
//Methos 2
// let year = 2012;
// if (year%400 == 0 || year%4 == 0){
//     console.log("2012 is a Leap year");
// } else if (year%100 !==0){
//     console.log("2012 is not a leap year");
// } else {
//     console.log("invalid year");
// };
//Method 3
let year = 2004;
if (year % 400 == 0 && year % 4 == 0 || year % 100 !== 0) {
    console.log("2012 is a Leap year");
}
else {
    console.log("Not a leap year");
}
;
