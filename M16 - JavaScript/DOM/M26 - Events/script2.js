
// Updating tile by btn1
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click',function(){
    const title = document.getElementById('title')
    title.innerHTML = "Title Changed";

})


//btn2
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click',function(){
    const inputname = document.getElementById('name');
    const name = inputname.value;
    

    const loginDetails = document.getElementById('loginDetails');

    loginDetails.innerText = name;
    
})


//Comment Box
const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click',function(){
    const commentInput = document.getElementById('comment');
    const comment = commentInput.value;
    console.log(comment);

    const commentContainer = document.getElementById('comment-container');

    //create a comment p
    const commentElement = document.createElement('p');
    commentElement.innerText = comment;

    commentContainer.append(commentElement);

    commentInput.value = ' ';
    
})