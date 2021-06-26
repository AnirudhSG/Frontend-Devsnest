const obj1={
    name:"Anirudh",
    x :function(y){
         console.log(this.name+y);
    }
}
const obj2={
    name:"hello"
}
console.log(obj1.x.call(obj2))
let f = obj1.x.bind(obj2,10);
f();