//3. Write a function to find out the sum of positive numbers, if the user enters a negative numbers, break the loop, the negative number entered should not be added to sum.
function Sum(n, v){
    if(n<0 && v<0){
        console.log("negetive number not allowed. ")
    }else{
        return parseFloat(n)+parseFloat(v);
    }
}
let a=prompt("Enter the first value: ")
let b=prompt("Enter the second value: ")
let c=Sum(a,b);
console.log("The sum of "+a+" and "+b+" is "+c);