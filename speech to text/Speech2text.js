var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var output = document.getElementById("result");

var recongition = new webkitSpeechRecognition();

recongition.lang = window.navigator.language;
recongition.interimResults = true;

startButton.addEventListener('click', () => {
    recongition.start();
});

stopButton.addEventListener('click', () => {
    recongition.stop();
});

recongition.addEventListener('result',(event) =>{
    const result = event.results[event.results.length - 1][0].transcript;
    output.textContent = result;
});