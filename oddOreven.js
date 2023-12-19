//1. Write a function to find out any given number is even or odd.
function evenOrodd(n) {
  if(n%2==0){
    console.log(n+"is even number.")
  }else{
    console.log(n+" is odd number.")
  }
    
}
let a=prompt("Enter the value: ")
evenOrodd(a);