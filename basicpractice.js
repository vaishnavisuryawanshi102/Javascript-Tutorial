let x = 5;
let y = "5";
console.log(x + y);

let v;
console.log(typeof v);


let name = "JS";
let Year = 2025;
console.log(name + Year);




console.log(10>5);
console.log(5 == "5");
console.log(5 === "5");



console.log(typeof "Hello")
console.log(typeof 100)
console.log(typeof true)
console.log(typeof undefined)


let a = "10";
let b = 2;

console.log(a * b); 


let value = "20";
value = Number(value);
console.log(typeof(20));


//store your age =21
//check is age is greater than 18
//print"Eligible" or "Not Eligible"


let age = 21;
if(age>=21){
    console.log("Eligible");
}else{
    console.log("Not Eligible");
}


let totalAmount =200

if(totalAmount > 100){
    dis = totalAmount * (10/100)
    totalAmount = totalAmount - dis
}

console.log(totalAmount);

//factorial

let number = 5
let factorialValue = 1

//5 * 4 * 3 * 2 * 1

for(i=1; i<=number; i++){
   factorialValue = factorialValue * i;
   console.log(i, factorialValue);
}
console.log("factorial of", number, "is", factorialValue);




//print even number from 1 to 20

for(i=1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}





// sum od digits

num1 = 1234
SumDigit = 0
while(num1 > 0){
    digit = num1 % 10
    console.log(digit,"digit")
    SumDigit = SumDigit + digit
    console.log(SumDigit,"SumDigit")
    num1 = Math.floor(num1 / 10)
    console.log(num1,"num1")
}





