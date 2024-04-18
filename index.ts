// Question 67
function MixedType(num1:number,num2:string):number{
    // First Method is
    // let n:number = parseInt(num2);
    // Second Method to convert string into number.
    let n:number = +num2;
    return num1 + n;
}

console.log(MixedType(4,"4"));

// Question 68
function MultiplyingDecimal(dec1:number,dec2:number):number{
    let result = dec1 * dec2;
    return Math.round(result*100)/100;
}

console.log(MultiplyingDecimal(4.55,4.55));

// Question 69

function QuotientRemainder(no1:number,no2:number):object{
    type remainder = {
        quotient : number;
        remainder : number
    }
    let quotremainder:remainder = {
         quotient : Math.floor(no1/no2),
         remainder : no1%no2
    } 
    return quotremainder;
}

// Another way to do this thing
// function QuotientRemainder(dividend: number, divisor: number): { quotient: number; remainder: number } {
//     // Calculates the quotient and remainder
//     let quotient = Math.floor(dividend / divisor);
//     let remainder = dividend % divisor;
//     // Returns both in an object
//     return { quotient, remainder };
// }

console.log(QuotientRemainder(4,5));