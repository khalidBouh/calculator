// Good Luck! You got this 💪🏾
// Write your code here.
function calculator (num1, num2, operator){
    if (operator === "+"){
        return num1+num2;
    } else if (operator === "-"){
        return num1-num2;
    }else if (operator === "*"){
        return num1*num2;
    }else if (operator === "/"){
        return num1/num2;
    } else { 
        return "Invalid Operator"
    }
}

console.log(calculator(2,3, "-"))
console.log(calculator(2,3, "/"))
console.log(calculator(2,3, "*"))
console.log(calculator(2,3, "+"))


