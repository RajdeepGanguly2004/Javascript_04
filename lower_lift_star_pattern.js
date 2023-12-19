//10. Print Lower Left Triangle Pattern.
let n=prompt("Enter the value: ")
for(let i=n;i>=1;i--){
    let str="* ";
    console.log(str.repeat(i))
}