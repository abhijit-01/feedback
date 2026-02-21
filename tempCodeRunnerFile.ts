let choice1 = "Sonakshi";
let choice2 = "Siuli";
let choice3 = "Rutvee";

let ayushWife : string = "";

let index = Math.floor(Math.random() * 3);
let choices : string[] = [choice1, choice2 , choice3];
ayushWife = choices[index];


if(ayushWife === "Sonakshi"){
    console.log("You guys look cute together Ayush");
}
else if(ayushWife === "Siuli"){
    console.log("You guys look cute together Siuli");
}
else{
    console.log("Enjoy ur time with Rutvee ayush !!! Have Fun Ayush..!! ");
}