console.log("Hellow JS");

//Accessing Elements
document.getElementsByTagName('h1')

const liCollections = document.getElementsByTagName('li');
for(const li of liCollections){
    console.log(li.innerHTML);  
}

const fruits_titles = document.getElementById('fruits-title')
fruits_titles.innerHTML = "Title changed by JS"

console.log( document.getElementById("fruits-title").innerText);


const first_element = document.getElementsByClassName("fruits-container")[0].innerHTML
console.log(first_element);


//Query Selection
//returns only the 1st li in the class
const lis1 = document.querySelector(".fruits-container li")
console.log(lis1);
//return all the li's in the class
const lis2 = document.querySelectorAll(".fruits-container li")
console.log(lis2);


//Styling
document.getElementById("fruits-title").style.color = "tomato"
document.getElementById("fruits-title").style.backgroundColor = "yellow";



const title = document.getElementById("fruits-title");
const x = title.classList;
console.log(x);


//Adding new list item
const newLi = document.createElement('li');
newLi.innerText = "I love fruits";
const ul = document.querySelector(".fruits-container ul");
ul.append(newLi)



