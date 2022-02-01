const numbers = [1,2,3,4,5,6,7];

const sqaures = numbers.map((item, index) => {
    return item * item;
})

console.log(numbers);
console.log(sqaures);

// ES6 spread operator(copy of an array or an object)
const copy_of_numbers = [...numbers];
console.log("copy_of_numbers", copy_of_numbers);
numbers.push(100);
console.log("nummbers", numbers);
console.log("copy_of_numbers", copy_of_numbers);


const new_array = [0,10,20, ...numbers, 90,91,91]
console.log("new_array", new_array);


const array = [{id:1}, {id: 2}]

const copy_ofarray = [...array];

//destructuring(ES6)==Object

const emp = {
    name: "anil", salary: 10000
}

//const name = emp.name;
//const salary = emp.salary;

const {name, salary} = emp;

console.log("name", name);
console.log("salary", salary);


//destructuring(ES6)==Array

const names = ["anil", "ashwin", "rahul"];

//const name1 = names[0];
//const name2 = names[1];

const [name1, name2] = names;

console.log("name1", name1);
console.log("name2", name2);