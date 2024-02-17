/*Init speech var with a speech request*/
let speech = new SpeechSynthesisUtterance();

/*Init voices var with an empty array*/
let voices = [];

/*Init voiceSelect var with select from HTML*/
let voiceSelect = document.querySelector("select");

/*Change voices*/
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

/*On click call speak function from textarea*/
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})