//13. Write a function to calculate factorial of a positive number using recursive function.
const Factorial=(n)=>{
    if(n==0){
    return 1;
    }else{
        return n*Factorial(n-1);
    }
    }
    let a=prompt("Enter the value: ");
    const fact=Factorial(a);
    console.log("The factorial of "+a+" is "+fact);