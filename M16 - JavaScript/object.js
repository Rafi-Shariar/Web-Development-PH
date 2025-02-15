/*
const bottle = {
    brand:'apple',
    price:45,
    isclean: false
}
*/
const subject = {
    name:'rafi',
    ID:1054,
    chapter:['1st' , '2nd'],
    //object in object
    exams:{
        name:'Final Exam',
        marks:40
    },

    'number': 16178
}

console.log(subject.ID);
subject['ID'] = 2345
console.log(subject['ID']);
console.log(subject['number']);


const keys = Object.keys(subject);
console.log(keys);

const values = Object.values(subject);
console.log(values);

console.log(subject.exams.marks);


