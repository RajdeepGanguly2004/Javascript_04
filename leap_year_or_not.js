//12. Write a function to check a year is leap or not.
const leapYearOrNot=(n)=>{
if(n%4==0){
    console.log("Yes!! this is leap year.")
}else{
    console.log("No!! this is not a leap year.")
}
}
let a=prompt("Enter the year: ");
leapYearOrNot(a);