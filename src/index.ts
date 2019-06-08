import Audio from './audio';
import DrumSet from "./drumSet";

window.onload = () => {

  function playAudio() {
    if (!drumSet.audio) {
      const audio = new Audio({
        bassSource: '/assets/audio/sensessionist_bass_drum.wav',
      });
      drumSet.setAudio(audio);
    }
    drumSet.playBass();
  }

  function setEventForPlay(element: HTMLElement) {
    element.addEventListener('click', () => {
      playAudio();
    });
  }

  // Setup drum set
  const drumSet: DrumSet = new DrumSet();
  const playingDrumSet = document.getElementById('drum-set');
  const bassButton = playingDrumSet.querySelectorAll('.bass');
  bassButton.forEach((element: HTMLElement) => {
    setEventForPlay(element);
  });

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'b':
      case 'v':
        playAudio();
        break;
    }
  });

};
