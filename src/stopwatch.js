import { LitElement, css, html } from 'lit';
import './stopwatch-display.js';
import './stopwatch-controls.js';
import './lap-times.js';

export class Stopwatch extends LitElement {
  static get properties() {
    return {
      running: { type: Boolean },
      elapsedTime: { type: Number },
      lapTimes: { type: Array },
      intervalId: { type: Number },
    };
  }

  constructor() {
    super();
    this.running = false;
    this.elapsedTime = 0;
    this.lapTimes = [];
    this.intervalId = 0;
  }

  render() {
    return html`
      <div id="stopwatch">
        <stopwatch-display .elapsedTime="${this.elapsedTime}"></stopwatch-display>
        <stopwatch-controls
          .running="${this.running}"
          @toggle-start-stop="${this.toggleStartStop}"
          @lap="${this.recordLap}"
          @clear="${this.clear}"
        ></stopwatch-controls>
        <lap-times .lapTimes="${this.lapTimes}"></lap-times>
      </div>
    `;
  }

  toggleStartStop() {
    if (this.running) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    this.running = true;
    this.intervalId = setInterval(() => {
      this.elapsedTime++;
    }, 1000);
  }

  stop() {
    this.running = false;
    clearInterval(this.intervalId);
    this.intervalId = 0;

    // Change the "Stop" button to "Clear" when stopped
    const clearButton = this.shadowRoot.querySelector('#controls button:last-child');
    if (clearButton) {
      clearButton.textContent = 'Clear';
    }
  }

  recordLap() {
    if (this.running) {
      this.lapTimes = [...this.lapTimes, this.elapsedTime];
    }
  }

  clear() {
    if (this.running) {
      this.stop();
    } else {
      this.elapsedTime = 0;
      this.lapTimes = [];
    }
  }
}

window.customElements.define('stop-watch', Stopwatch);
