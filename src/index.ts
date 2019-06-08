import Audio from './audio';
import DrumSet from "./drumSet";

window.onload = () => {

  // Setup drum set
  const drumSet: DrumSet = new DrumSet();
  const playingDrumSet = document.getElementById('drum-set');
  const bassButton = playingDrumSet.querySelectorAll('.bass');
  bassButton.forEach((button) => {
    button.addEventListener('click', () => {
      if (!drumSet.audio) {
        const audio = new Audio({
          bassSource: '/assets/audio/sensessionist_bass_drum.wav',
        });
        drumSet.setAudio(audio);
      }
      drumSet.playBass();
    });
  });

};
