//how to use this keyword in method

let person = {
    firstName : "Ritika",
    lastName : "Tiwari",
    age : 24,
    function(){
        console.log("hello i am "+ this.firstName +" and i have a "+ cars.car1 + " car.");
    } 
};
let cars ={
    car1 : "Tata",
    car2 : "BWD"
};
person.function();
console.log("hello");