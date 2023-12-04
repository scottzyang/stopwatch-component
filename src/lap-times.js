import { LitElement, css, html } from 'lit';

export class LapTimes extends LitElement {
  constructor() {
    super()
  }

  static get properties() {
    return {
      lapTimes: { type: Array },
    };
  }

  render() {
    return html`
      <div id="lap-times">
        <h3>Lap Times</h3>
        <ul>
          ${this.lapTimes.map((lap, index) => html`<li>${index + 1}: ${this.formatTime(lap)}</li>`)}
        </ul>
      </div>
    `;
  }

  formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
}

window.customElements.define('lap-times', LapTimes);
