// const textToSpeak = document.getElementById('text-To-Speak');

// function textToSpeech()
// {
//     let speechObj = new SpeechSynthesisUtterance(textToSpeak.value);
//     speechObj.voice = voices[2];
//     window.speechSynthesis.speak(speechObj);
    
// }

let button = document.querySelector("button");
let text = document.querySelector("textarea");
let voices;
button.addEventListener("click",()=>{
    let speak = new SpeechSynthesisUtterance(text.value);
    speak.voice = voices[1];
    window.speechSynthesis.speak(speak);
});

speechSynthesis.onvoiceschanged=()=>{
    voices = speechSynthesis.getVoices();
    console.log(speechSynthesis.getVoices());
}