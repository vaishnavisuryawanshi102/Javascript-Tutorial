//1. Write a function to create multiplication table of a number

function multiplication(num){
    for(i=1; i<=10; i++){
        console.log(num, "*", i, "=",num*i)
    }
}

multiplication(13)
multiplication(27)


//function for basic calculation

//Add two number
function add (a,b){
    return a + b;
}

//Substract two number
function substract(a,b){
    return a-b;
}

//Multiply two number
function multiply(a,b){
    return a*b;
}

//Divide two number
function divide(a,b){
    if (b === 0){
      return "Division by zero is not allowed.";
    }
    return a / b;
}

//Invoking the functions
console.log("Addition:", add(10, 5));
console.log("Substract:", substract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));


//create a function to find factorial of a number

//factorial

let factorialValue = 1

function factorial(num){
    for(let i=1; i<=num; i++){
        factorialValue = factorialValue * i;
        console.log(i,factorialValue)
    }
}
factorial(7)

//create a function to calculate fibbonacci of a number
// 0 1 1 2 3 5 8 13 21 34 55....

// 100

function fibbonacci(n){
    a = 0;
    b = 1;
  
    console.log("fibbonacci series")
    for(i=1; i<=10; i++){
        console.log(a);
        c = a+b;
        a = b;
        b = c;
    }
        
}

//ite count   i     n1     n2    temp      result
//1           1      0      1      1       n2 = n1+n2 = 0+1 =1
//2           2      1      1      1       n2 = n1+n2 = 1+1 =2
//3           3      1      2      2       n2 = 1+2=3

fibbonacci(10)
