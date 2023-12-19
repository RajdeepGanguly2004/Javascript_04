//7. Add two numbers using a function & print the result in console.
const Sum=(n, v)=>{
    return parseFloat(n)+parseFloat(v);
}
let a=prompt("Enter the first value: ");
let b=prompt("Enter the second value: ");
c=Sum(a,b)
console.log("The sum of "+a+" and "+b+" is: "+c);