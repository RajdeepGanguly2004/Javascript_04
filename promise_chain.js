const loadScript= (src)=>{
    return new Promise((resolve, reject)=>{
         let script=document.createElement("script")
         script.type="text/javascript"
         script.src= src
         document.body.appendChild(script)
         script.onload=()=>{
            resolve("Script loaded!!")
         }
         script.onerror=()=>{
            reject("Sorry!! script not loaded.")
         }
    })
}

let p1= loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css")
p1.then((value)=>{
       console.log(value)
       return loadScript("https://www.w3schools.com/js/js_objects.asp")
}).then((value)=>{
    console.log("Second script ready!!")
}).catch((error)=>{
    console.log("Sorry!! script not loaded.") 
})