// converting first letter to uppercase
let p = 'The child walked to the market'
let z = p.charAt(0).toUpperCase();
+p.slice(1);
console.log({p});

//Add character at the third index
let a='The child walked to the market'
let charToAdd = 'X'
let q= a.slice(0,3) + charToAdd +a.slice(3);
console.log({q});

//Count occurrence of 'hello'
let r ="hello world, hello javascript!";
let s = (r.match(/hello/g)|| []).length;
console.log(s);

//get the last three characters
let o= "character"
let t = o.slice(6)
console.log({t})

//First three characters
let m = "character";
let n = m.slice(0,4);
console.log({n});

//sort characters in ascending order
let x = "operators"
let y = x.split("").sort().join("")                
console.log({y});

//Remove all spaces 

let h ="I love Javascript"
let g = h.replaceAll(" ","")
console.log(g);


// finding index of 't'
let w = "greeting";
let u = w.indexOf('t')
console.log({u});

//deleting first two characters in  a string
let d = "greetings";
let c = d.slice(2);
console.log({c});

//deleting the last two characters

let i = "greeting"
let j = i.slice(0 ,-2);
console.log(j);


