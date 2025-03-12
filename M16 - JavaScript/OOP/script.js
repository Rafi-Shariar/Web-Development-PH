//Class
class Product{
    name;
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    details(){
        console.log(`name ${this.name} , age:${this.age}`); 
    }
}

const a = new Product("mashfia",1);
a.details()


//----------inheritance
class Vehicle{

    name;
    #price; //encapsulation

    constructor(name,price){
        this.name = name;
        this.#price = price;
    }

    move(){
        console.log(`${this.name} is Moving`);
        
    }

    WhatIsThePrice(){
        console.log(`The price is ${this.#price}`);
        
    }
}

class Bus extends Vehicle{

    seat;
    constructor(name,price,seat){
        super(name,price);
        this.seat = seat;
    }

    route(){
        console.log(`dhaka to Coxs`);
        
    }
}

const Shohag = new Bus("Shohag", 1000, 20);
Shohag.move();
Shohag.route();
console.log(Shohag);
console.log(Shohag.price);
Shohag.WhatIsThePrice();


//----------------------------------------
  