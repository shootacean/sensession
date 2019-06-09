import * as DrumSet from "./drumSet";

const drumSet: DrumSet.DrumSet = new DrumSet.DrumSet();

const setupMouseAndTap = () => {
  document.getElementById('snare-drum').addEventListener('mousedown', (event) => {
    drumSet.playSnare();
  });
  document.getElementById('bass-drum').addEventListener('mousedown', (event) => {
    drumSet.playBass();
  });
};

const setupKeyboard = () => {
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'f':
        drumSet.playSnare();
        break;
      case 'b':
      case 'v':
        drumSet.playBass();
        break;
    }
  });
};

window.onload = () => {
  setupMouseAndTap();
  setupKeyboard();
};
