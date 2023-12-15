let arr2=[10,20,30,40,50];
const a2=arr2.filter((value)=>{
    console.log(value);
    return value<50;
})
console.log(a2);