
//promises
let data = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("result Executed after some time")
    }, 5000)
});
console.log(data);

data.then((item)=>{
    console.log(item);
})
console.log("first execution");


// promises

let add = new Promise(function(resolve, reject){
    setTimeout(()=>{
    let a = 4;
    let b = 2;
    let c = a + b;
    if(c <= 6){
        console.log("yes");
    } else {
        console.log("no");
    }
    } , 5000)
});

add.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

//async and await 
async function solve(){
    let mul = new Promise(function(resolve , reject){
        setTimeout(() => {
            let a = 2;
            let b = 3;
            let z = a * b;
            console.log(z)
        },6000)
    });

    let data1 = await mul;
    console.log(data1);
}
solve();
/*

//settimeout
setTimeout(div,3000);
function div(){
    console.log("hello with timeout 3 sec");
}

//clearTimeout

let store = setTimeout(div1, 1000);
function div1(){
    console.log("helllo")
}

clearTimeout(store);

//time interval
setInterval(div4,3000);
function div4(){
    console.log("setinterval");
}

//clearInterval

let store2 = setInterval(div5, 4000);
function div5(){
    console.log("remove interval");
}
clearInterval(store2);
*/