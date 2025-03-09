const Attendance = parseFloat(document.getElementById(`Attendance`).value);
const Assignments = parseFloat(document.getElementById(`Assignments`).value);
const Presentation = parseFloat(document.getElementById(`Presentation`).value);
const Quiz = parseFloat(document.getElementById(`Quiz`).value);
const Mid = parseFloat(document.getElementById(`Mid`).value);

const LabAttendence = parseFloat(document.getElementById(`LabAttendence`).value);
const LabPer = parseFloat(document.getElementById(`LabPer`).value);
const LabRep = parseFloat(document.getElementById(`LabRep`).value);
const Project = parseFloat(document.getElementById(`Project`).value);





// Toggling Course Type
document.getElementById(`theoryRadio`).addEventListener('click',function(){
    document.getElementById(`infoTheory`).classList.remove(`hidden`);
    document.getElementById(`infoLab`).classList.add(`hidden`);


});


document.getElementById(`LabRadio`).addEventListener('click',function(){
    document.getElementById(`infoTheory`).classList.add(`hidden`);
    document.getElementById(`infoLab`).classList.remove(`hidden`);

});







