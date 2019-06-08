import Audio from './audio';

export default class {
  audio: Audio;

  setAudio(audio: Audio) {
    this.audio = audio;
  }

  private play(drumType, source) {
    this.audio.play(source);
  }

  public playBass() {
    this.play('bass', this.audio.createSource(this.audio.bassSourceBuffer));
  }
}
