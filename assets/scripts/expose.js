// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let audio = new Audio();  // Audio file

  const slider = document.getElementById('volume');   // Volume silder
  const volImg = document.querySelectorAll('img')[1];   // Volume icon
  slider.addEventListener('change', (event) => {
    audio.volume = slider.value / 100 ;               // Set volume
    if(slider.value == 0) {                           // Change icon
      volImg.src = "./assets/icons/volume-level-0.svg";
    } else if (slider.value < 33) {
      volImg.src = "./assets/icons/volume-level-1.svg";
    } else if (slider.value < 67) {
      volImg.src = "./assets/icons/volume-level-2.svg";
    } else {
      volImg.src = "./assets/icons/volume-level-3.svg";
    }
  });

  const hornType = document.getElementById('horn-select');  // Selector
  hornType.addEventListener('change', (event) => {
    const hornImg = document.querySelectorAll('img')[0];     // Change image
    hornImg.src = "./assets/images/" + event.target.value + ".svg";
    hornImg.alt = event.target.value;
    audio = new Audio("./assets/audio/" + event.target.value + ".mp3");
    audio.volume = slider.value / 100 ;                     // Change audio & reset vol
  });

  const button = document.querySelector('button');    // Play button
  const jsConfetti = new JSConfetti()                 // Confetti
  button.addEventListener('click', (event) => {       // Play
    audio.play();
    if(hornType.value=='party-horn') {
      jsConfetti.addConfetti()
    }
  });
}