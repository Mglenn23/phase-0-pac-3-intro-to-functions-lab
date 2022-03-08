function shout(string){
return string.toUpperCase();
}

function whisper(string){
return string.toLowerCase();
}

function logShout(string){
let s2=string.toUpperCase();
console.log(s2);
}

function logWhisper(string){
let slow= string.toLowerCase();
console.log(slow);
}

function sayHiToHeadphonedRoommate(string){
let a=string;
if(a=='hello'){
    let b = "I can't hear you!";
return b;
}
else if(a=='HELLO'){
    let c = "YES INDEED!";
    return c;
}
else if(a=="Let's have dinner together!"){
    let d = "I would love to!";
    return d;
}
}