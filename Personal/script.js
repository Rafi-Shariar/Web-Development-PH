document.getElementById(`theoryRadio`).addEventListener('click',function(){
    document.getElementById(`infoTheory`).classList.remove(`hidden`);
    document.getElementById(`infoLab`).classList.add(`hidden`);
});


document.getElementById(`LabRadio`).addEventListener('click',function(){
    document.getElementById(`infoTheory`).classList.add(`hidden`);
    document.getElementById(`infoLab`).classList.remove(`hidden`);
})