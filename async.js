console.log(10);
console.log(20);
setTimeout(()=>{
    console.log(30);
},5000)
setInterval(()=>{
    // document writeln("MRU");
    console.log(30);
    
},1500)



console.log(40);
console.log(50);
// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);


    let p2 = new Promise((  resolved , reject) => { 
        resolved("successfull");
    
    })
    p2.then((response)=> console.log(response))
    p2.catch((error)=> console.log(error))
    p2.finally(()=> console.log("finally for both "))

})