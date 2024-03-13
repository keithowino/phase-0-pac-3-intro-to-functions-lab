
// Initialize Functions

// shout

function shout(reaction){
  return reaction.toUpperCase();
}

let result = shout("hello!");

console.log(result);

// whisper

function whisper(sound){
  return sound.toLowerCase();
}

let resultTwo = whisper("HEY");

console.log(resultTwo);

// logShout

function logShout(did){
  console.log(did.toUpperCase());
}

logShout("Mummy");

// logWhisper

function logWhisper(quiet){
  console.log(quiet.toLowerCase());
}

logWhisper("SHH!");

// sayHiToHeadphonedRoommate


function sayHiToHeadphonedRoommate(greeting){
  let output = "";
  if(greeting == greeting.toUpperCase()){
    output = "YES INDEED!";
  }else if(greeting == greeting.toLowerCase()){
    output = "I can't hear you!";
  }else if(greeting == "Let's have dinner together!"){
    output = "I would love to!";
  }
  return output
};

let resultThree = sayHiToHeadphonedRoommate("Let's have dinner together!");

console.log(resultThree);
