const address = "abcdefghi";
const part = address.slice(2,5);
console.log(part);

//splinting sentance in every space
const sentence = "My name is Rafi Shariar";
console.log(sentence.split(' '));

const frinds = ["rafi" , "Shariar" , "Lamia" , "Akhter"];
console.log(frinds.join(" + "));


const A = "abns";
console.log(A.includes('a'));

//multiline
const multiline = `Ami Jani 
J tumi 
Aj bhalo aso`;
console.log(multiline);

//Modern & Best Way
console.log(`What is the sentence ? ${sentence}`);
