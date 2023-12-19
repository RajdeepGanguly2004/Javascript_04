//2. Write a function to find out any given number is zero or positive or negative.
function positiveOrnegetive(n) {
    if(n==0){
        console.log(n+" is zero.")
    }else if (n>0) {
        console.log(n+" is positive.")
    } else {
        console.log(n+" is negetive.")
    }
    
}
let a=prompt("Enter the value: ")
positiveOrnegetive(a);