const sum = (a,b,displayer) =>{
     displayer(a+b);
};


const display = (msg) =>{
     console.log(msg);
};

const displayAlt = (msg) =>{
    console.log("this is an alternate way of displaying");
    console.log(msg);
}

//const res = dislay(sum(3,5));

sum(3,5,displayAlt);

