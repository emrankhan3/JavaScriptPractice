


const f = (a,b,ff)=>{
    return ff(a,b)
}

console.log(f(10,200, (a,b)=>{return a*b} ))
/*
callBack function is a Osthir function which receive a function as parameter and then
we can plug any function as we like.

*/



// another example
const f = (a,ff)=>{
    return ff(a)
}

console.log(f(6,(x)=>x<<=1))

