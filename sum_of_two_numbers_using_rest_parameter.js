//9. Calculate the sum of numbers using rest parameters and display the result in console.
function myFunc(num1, num2, numn){
    var sum=num1+num2;
    for(var i=0;i<numn.length;i++){
        sum+=numn[i];
    }
    console.log("Sum of numbers= "+sum);
}
myFunc(25,30,10,5,15,20);