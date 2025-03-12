function HandleLoadUser(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => {
        displayUser(data)
    })

}

const displayUser = (users) => {
    console.log(users);
    
}
