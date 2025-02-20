function calculateVAT( price ) {

    if(typeof (price) == "string" || price < 0){
        return "Invalid";
    }

    let vat = (price * 7.5) / 100;
    return vat;
    
}


function  validContact( contact ) {

    if(typeof(contact) != 'string') return "Invalid"

    let number_size = contact.length;
    let X = contact[0];
    let Y = contact[1];
    let spaces = contact.includes(' ');

    if(number_size == 11 && X == '0' && Y == '1' && !spaces) return true;

    return false;

}



function  willSuccess( marks ) {

    if(!Array.isArray(marks)) return "Invalid";

    let passed = 0;
    let failed = 0;

    for(let mark of marks){
        if(mark >= 50) passed += 1;
        else failed +=1;
    }

    if(passed > failed) return true;
    else return false;
    
}



function  validProposal( person1 , person2 ) {

    if(typeof(person1) != "object" || typeof(person2) != "object") return "Invalid";
    
    let gen1 = person1.gender;
    let gen2 = person2.gender;
    let gen1_age = person1.age;
    let gen2_age = person2.age;

    if(gen1 != gen2 && Math.abs(gen1_age - gen2_age) <= 7) return true;
    else return false;
}



function  calculateSleepTime( times ) {
    
    let total_secs = 0;
    for(let sec of times){

        if(typeof(sec) != "number") return "Invalid";
        total_secs += sec;
    }

    let minutes = Math.floor(total_secs/60);
    total_secs = total_secs%60;

    let hours = Math.floor(minutes/60);
    minutes = minutes%60;

    const result = {
        hour: hours,
        minute:minutes,
        second:total_secs
    }

    return result;
  
}


