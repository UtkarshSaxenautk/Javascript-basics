let text = "Hello World and World";
console.log(text.length);

let part = text.slice(-6);
let p = text.substr(2 , 5);
let q = text.substring(7);
console.log(part , "\n" , p , "\n" , q);

// Replace Method
let nextext = text.replace("World" , "Everyone");
console.log(nextext);

let txt = text.replace(/World/g , "Everyone");
console.log(txt);
// Lowercase

let ltext = text.toLowerCase();
let utext = text.toUpperCase();
console.log(ltext + "\n" + utext);

// conccate 

let text3 = ltext.concat("-" , utext);
console.log(text3);

let text4 = ltext + "--" + utext ;
console.log(text4);