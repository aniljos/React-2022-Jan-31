console.log("in one.js");

//named import 
import {add, multiply} from './moduletwo.js'

function foo(){
    console.log("in foo..");
    add();
}

function bar(){
    console.log("in bar..");
    multiply();
}

//default export
export default {foo, bar};
