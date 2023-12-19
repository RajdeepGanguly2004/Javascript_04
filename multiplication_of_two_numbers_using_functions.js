//8. Multiply two numbers and return the product from a function
const Multiplication=(n, v)=>{
      return parseFloat(n)*parseFloat(v);
}
let a=prompt("Enter the first value: ");
let b=prompt("Enter the second value: ");
c=Multiplication(a,b)
console.log("The multiplication of "+a+" and "+b+" is: "+c);