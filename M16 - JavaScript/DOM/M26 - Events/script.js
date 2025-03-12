function makeRed(){
    document.body.style.backgroundColor = 'tomato';
}

//for button 3
const btnMakeBlue = document.getElementById('btn');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}


//for button 4 - Best Use
document.getElementById('btn4').addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})