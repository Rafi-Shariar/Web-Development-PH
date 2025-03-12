const login_btn = document.getElementById('login-btn');
login_btn.addEventListener('click',function(event){
    event.preventDefault();

    const accNum = document.getElementById('accNum').value;
    const accPass = document.getElementById('accPass').value;


    if(accNum.length === 11){
        if(accPass==='1234'){
            window.location.href = "./dashboard.html";
        }
        else console.log('Incorrect Pin'); 
    }
    else{
        console.log('Invalid Account'); 
    }
    
    
})

document.get
