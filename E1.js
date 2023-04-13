"use strict";
// const variable = "joe";
// console.log(variable);

// const makeError = () => {
//     try{
//         throw new customError("This is a custom error");
//     }catch(err){
//         console.error(err.name);
//         console.error(err.message);
//         console.error(err.stack);
    
//     }
// };

// const makeError = () => {
//     try{
//         throw new Error("This is a error");
//     }catch(err){
//         console.error(err.name);
//         console.error(err.message);
//         console.error(err.stack);
//     }
// };

const makeError = () => {
    let i =1;
    while(i<=5){
        try{
            if(i%2!==0){
                throw new Error("Odd Number");
            }
            console.log("Even Number");
        }catch(err){
            console.error(err.stack);
        }
        finally{
            console.log("Finally block");
        }
        i++;
    }
};

makeError();

function customError(message){
    this.message = message;
    this.name = "Custom Error";
    this.stack = this.name + ": " + this.message;
}