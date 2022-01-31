//var x;var y;

console.log("Hello Scopes");

console.log("x: ", x);
//var x = 10; //global, hoisting
let x = 10; //global, no-hoisting
console.log("x: ", x);

var y;
console.log("y: ", y);

//console.log("z: ", z); //reference error

foo();
function foo(){

    console.log("in foo");
    if(x < 100){
        //var msg = "hello";
        let msg = "hello";// block scope, no-hoisting
        console.log("msg: ", msg);
    }
    //console.log("msg: ", msg);
}

console.log("App Over");

