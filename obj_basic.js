const obj  = {name : "John",
 age : 30,
city : "New York"
};


console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);

const obj2 = {
    name : "John",
    games : ["Cricket", "Football", "Hockey"],
    friends : {
        name : "Peter",
        age : 30
    },
    action: function () {
       return 'hello';
    },
    last: function () {
        return 'time for '+ obj2.name;
    }
};
console.log(obj2.action());
console.log(obj2.last());

console.log(obj2);
console.log(obj2.friends.name);
console.log(obj2.friends);
