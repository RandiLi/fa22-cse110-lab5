// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;                     // speechSynthesis
  const options = document.getElementById('voice-select');  // Dropdown options
  let voices ;                                              // Array of voices
  synth.addEventListener("voiceschanged", (event) => {      // When voices change
    clear(options);                                         // Reset dropdown
    voices = synth.getVoices();                             // Get new voices

    for(let i=0; i<voices.length; i++) {                    // Add new voices to dropdown
      const option = document.createElement('option');
      option.textContent = voices[i].name + "(" + voices[i].lang + ")";
  
      options.appendChild(option);
    }
  })

  const button = document.querySelector('button');          // Listen for button press
  button.addEventListener('click', (event) => {
    if(options.selectedIndex) {                             // Only if a voice is selected
      const text = document.getElementById('text-to-speak');
      const speech = new SpeechSynthesisUtterance(text.value);
      speech.voice = voices[options.selectedIndex-1];
      synth.speak(speech);

      const smile = document.querySelector('img');       // Change smiley
      smile.src = "./assets/images/smiling-open.png";

      speech.addEventListener('end', (event) => {           // Listen for end of uttering
        smile.src = "./assets/images/smiling.png";
      })
    }
  });
}

// Remove all but first option
function clear(list) {    
  while(list.length > 1){
    list.remove(1);
  }
}
