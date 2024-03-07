function shout(text) {
  return text.toUpperCase();
}
function whisper(text) {
  return text.toLowerCase();
}
function logShout(text) {
  console.log(shout(text));
}
function logWhisper(text) {
    console.log(whisper(text));
}
function sayHiToHeadphonedRoommate(text) {
    if(text == whisper(text))
    return "I can't hear you!"
    if(text ==shout(text))
    return "YES INDEED!" 
    if(text ==="Let's have dinner together!")
    return "I would love to!" 
  return text.toUpperCase();
}
