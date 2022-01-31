
var x = 100; // x is a member of the global object(window)

// function statement
// implicit args==> this, arguments
function sum(x, y){
    console.log("in sum...", this);
}

// function sum(){
//     console.log("in sum(no args)...");
// }
sum(2,3);
sum();
sum(2,3,4,5);

// function expression
let add = function(x, y){
    return x + y;
}
console.log("add: ", add(20,30));

 

// arrow function
let compute = (x, y)=>{

    return x + y;
}
console.log("compute: ", compute(20,30));

compute = (x, y) => x * y
console.log("compute: ", compute(20,30));


const obj = {
    id: 10,
    print: function(){

        //var this 
        console.log("Id: ", this.id);

        setTimeout(function(){
            //var this;
            console.log("Id after 2secs: ", this.id);
        }, 2000);

        setTimeout(()=>{

            console.log("Id after 2secs: ", this.id);
        }, 2000);
    }
}

obj.print();
