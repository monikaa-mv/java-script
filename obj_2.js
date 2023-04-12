const vehicle = {
    type: 'car',
    color: 'red',
    model: 'BMW',
    year: 2019,
    engine: function(){
        return "V6";
    }
};

const new_vehicle = Object.create(vehicle);
new_vehicle.type = 'truck';
new_vehicle.wheels = 6;
console.log(new_vehicle);
console.log(new_vehicle.type);
console.log(new_vehicle.model); // Inherited from vehicle

const tesla = Object.create(new_vehicle);
tesla.seat = 2;
console.log(tesla.seat);
console.log(tesla.wheels);
console.log(tesla.model);

console.log(Object.keys(vehicle));
console.log(Object.values(vehicle));
