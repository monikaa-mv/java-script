class Pizza{
    constructor(size){
        this.size = size;
        this.toppings = [];
        this.crust = "thin";
    }

    getToppings(){
        return this.toppings;
    }

    setTopping(topping){
        this.toppings.push(topping);
    }
    
    getSize(){
        return this.size;
    }

    getCrust(){
        return this.crust;
    }


    bake(){
        console.log("Baking pizza "+this.size+" in "+this.crust+" crust.");
    }

}
const pizza = new Pizza("large");
pizza.setTopping("pepperoni");
pizza.setTopping("mushrooms");
pizza.bake();
console.log(pizza.getToppings());
