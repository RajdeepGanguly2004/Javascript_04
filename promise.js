let p1= new Promise((resolve, reject)=>{
    console.log("Process pending.");
    setTimeout((reslve)=>{
        console.log("Fullfilled!!")
        resolve=(true)
    }, 5000)
})
//Using .then & .catch keyword in promise
let p2= new Promise((resolve, reject)=>{
    console.log("Process pending.");
    setTimeout(()=>{
        console.log("Rejected!!");
        reject(new Error("Error!!"));
    }, 5000)
})
p1.then((resolved)=>{
    console.log(resolved);
})
p2.catch((error)=>{
    console.log(error);
    console.log("Error occured in p2.");
})