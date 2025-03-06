/*
const bottle = {
    brand:'apple',
    price:45,
    isclean: false
}
*/

const mySymble = Symbol("Key1");

const subject = {
    name:'rafi',
    ID:1054,
    chapter:['1st' , '2nd'],
    'number': 16178,
     //object in object
     exams:{
        name:'Final Exam',
        marks:40
    },

    [mySymble] : "Mykey"

}
subject.greeting = function(){
    console.log(`This subject has 3 credits, ${this.name}`); 
    
}

console.log(subject.ID);
subject['ID'] = 2345
// console.log(subject['ID']);
// console.log(subject['number']);


const keys = Object.keys(subject);
// console.log(keys);

const values = Object.values(subject);
// console.log(values);

// console.log(subject.exams.marks);

// // console.log(subject[mySymble]);

console.log(subject.greeting());



//Combining 2 objects
const obj1 = { a:"1", b:"2"};
const obj2 = { c:"3", d:"4"};

const obj3 = Object.assign( {},obj1,obj2);
const obj4 = Object.assign(...obj1, ...obj2);
// console.log(obj3);



//--------------------------------------------------------
const person = {
    name: "hena",
    age:10,
    country:"BD"
}
person.status = "Active"; //adding new entry in object
Object.seal(person); //Cant add new properties anymore
Object.freeze(person); //Cant add newo property & can modity existing property
console.log(Object.entries(person));

