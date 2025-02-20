function print(){
    console.log(`Learning function`);
}
print()

function sum(number1, number2){
    return number1 + number2;
    
}

let ans = sum(10,2)
console.log(ans);


function getMenu() {
    console.log("Burger, Pizza, Pasta");
}
getMenu();



function shoppingCart(...products){
   return num1;
}



const Obj = {
    username: "Rafi",
    price: 1200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

console.log(handleObject(Obj));


//IIFE - Immediateluy Invoked Fuction Expressions
//removes `globar scope pollution` & immediate execution of the code without calling it
(function chai(){
    console.log(`DB Connected`);
})()
