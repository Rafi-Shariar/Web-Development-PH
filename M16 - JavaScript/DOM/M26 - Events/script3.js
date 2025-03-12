document.getElementById('item-2').addEventListener('click',function(e){
    console.log('cliked');
    e.stopImmediatePropagation();
    
})

document.getElementById('list').addEventListener('click',function(){
    console.log('cliked ol');
    
})