import Audio from './audio';

export class DrumSet {
  audio: Audio;

  bassDrum: string;
  snareDrum: string;

  constructor() {
    this.bassDrum = '/assets/audio/sensessionist_bass_drum.wav';
    this.snareDrum = '/assets/audio/sensessionist_snare_center.wav';
    this.setAudio();
  }

  private setAudio() {
    this.audio = new Audio({
      bassSource: this.bassDrum,
      snareSource: this.snareDrum,
    });
  }

  private play(source: AudioBufferSourceNode) {
    if (!this.audio) {
      this.setAudio();
    }
    this.audio.play(source);
  }

  public playBass() {
    this.play(this.audio.createSource(this.audio.bassSourceBuffer));
  }

  public playSnare() {
    this.play(this.audio.createSource(this.audio.snareSourceBuffer));
  }
}
