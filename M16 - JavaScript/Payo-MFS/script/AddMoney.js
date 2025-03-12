toggleHandler('cashout-section','none');

document.getElementById('cashout-box').addEventListener('click',function(event){
    event.preventDefault();

    toggleHandler('add-money-section','none');
    toggleHandler('cashout-section','block');
     
})