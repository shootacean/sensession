
class SensessionistAudio {
  audioContext;

  bassSource;
  bassSourceBuffer;

  constructor(sourceUrlList) {
    this.audioContext = window.AudioContext ? new window.AudioContext() : new window.webkitAudioContext;
    this.setupSources(sourceUrlList).catch((error) => console.error(error));
  }

  async setupSources(sourceUrlList) {
    this.bassSourceBuffer = await this.fetchSourceBuffer(sourceUrlList.bassSource);
  }

  play(source) {
    source.start(0);
  }

  createSource(buffer) {
    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(this.audioContext.destination);
    return source;
  }

  async fetchSourceBuffer(url) {
    const buffer = await this.fetchAudioBuffer(url);
    return await this.audioContext.decodeAudioData(buffer)
        .then((decoded) => {
          return decoded;
        })
        .catch((error) => {
          console.error('failed decode', error);
        });
  }

  async fetchAudioBuffer(url) {
    return await fetch(url)
        .then((response) => {
          return response.arrayBuffer();
        })
        .catch((error) => {
          console.error(error);
        });
  }
}

class SensessionistDrumSet {
  audio;

  setAudio(audio) {
    this.audio = audio;
  }

  play(drumType, source) {
    console.log(Date.now(), drumType);
    this.audio.play(source);
  }

  playBass() {
    this.play('bass', this.audio.createSource(this.audio.bassSourceBuffer));
  }
}

window.onload = () => {

  // Setup drum set
  const drumSet = new SensessionistDrumSet();
  const playingDrumSet = document.getElementById('drum-set');
  const bassButton = playingDrumSet.querySelectorAll('.bass');
  bassButton.forEach((button) => {
    button.addEventListener('click', () => {
      if (!drumSet.audio) {
        const audio = new SensessionistAudio({
          bassSource: '/assets/audio/sensessionist_bass_drum.wav',
        });
        drumSet.setAudio(audio);
      }
      drumSet.playBass();
    });
  });

};
