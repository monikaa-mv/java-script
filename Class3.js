function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;

    return {
        bake: () => console.log("Baking pizza "+size+" in "+crust+" crust.")
    };
}

const pizza = pizzaFactory("large");
pizza.bake();