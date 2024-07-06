// var cond:boolean = false; //0
// var cond: boolean = true; //all other numerical values

// //conditional operators 

// var num1:number = 10
// var num2:number = 13
// var num3: number = 12;
// var strng2: string = "10";

//var result = num1 + num2 == num2 + num1;
//var result = num1 === strng2;
// var result = num1 !=== num3;
// console.log("result", result);

// var result1 =  num1 > num3;
// var result2 =  num1 < num3;
// var result3 =  num1 <= num3;
// var result4 =  num1 >= num3;
// console.log(result1); //same print for other results
// // var result see in picture


// logical operators
//OR AND NOT
// var n1: number = 10;
// var n2: number = 20;
// //var output = n1+ n2+ ++n1;
// // console
// ++n1; //11
// n2++; //21
// //var output = --n1 + --n2 + 10 + n2 + ++n1;
// //10 + 20 + 10 + 20 + 11 = 71
//console.log (output);
//see in pic 

//var output = !(--n1 + --n2 + 10 + n2 + ++n1 !== 71);
// ! if it is at outside the barckets it shows oposite behaviour
// var output = !(--n1 + --n2 + 10 + n2 + ++n1 * 0 !== 71);
// console.log(output);

//conditional statement "if or else"
// var age : number = 21;
// if(age>= 18){
// console.log("You are eligible.");
//}
// keyword () {

//}
// var age : number = 15;
// if(age>= 18){
// console.log("You are eligible.");
// }

// var age : number = 15;
// if!(age>= 18){
// console.log("You are eligible.");
// }

// var age : number = 15;
// var nationality: string = "Pakistani";
// if((age>= 18 || nationality ==="Pakistani")){
// console.log("You are eligible.");
// }
// == (check value, === (value check and string checking))
// var marks = 50;
// var cond = marks > 33;
// if(cond){
//     console.log("Pass");
// }
// if(!cond){
//     console.log("Fail");
// }

//IF ELSE IF
// var marks = 55;
// if(marks > 80 && marks <= 100){
//     console.log("A Grade");
// } else if (marks> 70){
//     console.log("B Grade");
// } else if (marks> 60){
//     console.log("C Grade");
// } else if (marks> 40 && marks < 50){
//     console.log("E Grade");
// } else if (marks < 33){
//     console.log("Fail");
// }  else {
//     console.log("invalid input");
// } // follow sequence or add AND Operator in line 83

//pic attendance and theory
//  var ATMPin = "1234";
//  //console.log(ATMPin.length);
// if(ATMPin > 999 && ATMPin < 10000){
//     console.log("valid");
// } else {
//     console.log("invalid");
// }
// //nested if

var b: number = 100;
var perunitprice = 10;
var price = b*perunitprice;
if(b> 0 && b <=100){
    var tax = (price*5)/100;
    console.log("Tax:", + tax);
    var totalprice = price + tax;
    console.log(totalprice);
} else if(b>100 && b <= 200){
    var tax = (price*10)/100;
    console.log("Tax:" + tax);
    var totalprice = price + tax;
    console.log(totalprice);
}else if (b>200 && b<=300){
    var tax = (price*20)/100;
    console.log("Tax:" + tax);
    var totalprice = price + tax;
    console.log(totalprice);

}