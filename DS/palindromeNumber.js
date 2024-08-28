// Palindrome number

const number = (num)=>{
    return num <0 ?false: num === Number(num.toString().split("").reverse().join(""))
}

console.log(number("abc"));