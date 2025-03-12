const person = {
    name : "hena",
    age : 10,
    friends: ["herto" , "metro"],
    status : true
}

//converting to json
const newPerson = JSON.stringify(person);
//console.log( newPerson);

//Converting from JSON to Object
const newPerson2 = JSON.parse(newPerson);
// console.log(newPerson2);


//fetching data
const HandleLoadData = () => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(data =>{
        console.log(data);
      })

}
