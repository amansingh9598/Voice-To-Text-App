// alert("hi")

function convertToVoice() {
    let text = document.querySelector('.box input').value.trim();
    if (text == '') {
        alert('Please Enter Text!');
        return;
    }
    // console.log(text);
    const spch = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(spch);

}

function convertToText() {
    let a = new webkitSpeechRecognition();
    a.start();
    a.continuous = true;
    a.lang = 'en-us';
    a.onresult = function (b) {
        //console.log(b.results[0][0].transcript);
        document.getElementById('textOutput').value = b.results[0][0].transcript;

    }
}