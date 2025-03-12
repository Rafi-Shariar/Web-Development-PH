const person = {
    name : "hena",
    age: 30,
    friends: ["lamia", "Sakib"],
    
    details:{
        job : "Yes",
        isMarried : true,
        status:"not found",

        father:{
            name : "Karim mia",
            age : 59
        }
    }
}

// console.log(person["details"]["job"]);


// console.log(person.details.father.name);
// console.log(person.details.mother?.name); //used to handle errors, by this if mother is not avaible there will be no error



//----------------------------------------------------
//Map ( return an Array)
const numbers = [1,2,3,4,5];

const new_numbers = numbers.map(value => value + 10);
// console.log(new_numbers);


//-----------------------------------------
const products = [
    {id:1, name: "Iphone12" , color: "black", price:1200},
    {id:2, name: "xiaomi" , color: "gold", price:500},
    {id:3, name: "samsung" , color: "black", price:1100},
    {id:4, name: "iphone15" , color: "blue", price:2200},
    {id:5, name: "xiaomi2" , color: "black", price:200}
];

// products.forEach(product=>{
//     if( product.price > 1000){
//         console.log(`model : ${product.name} -- price : ${product.price}`);
        
//     }
    
// })

//Filter products
const filterProducts = products.filter(product=>{
    return product.color == 'black';
})
console.log(filterProducts);


//Find
const ID4 = products.find(product => product.id == 4);
console.log(ID4);

