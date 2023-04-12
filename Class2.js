class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    speedUp() {
        return this.make + " " + this.model + " is speeding up";
    }

    slowDown() {
        return this.make + " " + this.model + " is slowing down";
    }


}

class car extends Vehicle {
    constructor(year){
        super();
        this.year = year;
    }
    speedUp() {
        return this.year + " " + "is speeding up";
    }

}

const car1 = new car("Honda", "Civic");
console.log(car1.speedUp());
