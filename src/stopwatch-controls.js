import { LitElement, css, html } from 'lit';

export class StopwatchControls extends LitElement {
  constructor() {
    super()
  }

  static get properties() {
    return {
      running: { type: Boolean },
    };
  }

  render() {
    return html`
      <div id="controls">
        <button @click="${this.toggleStartStop}">
          ${this.running ? 'Stop' : 'Start'}
        </button>
        <button @click="${this.lap}">
          Lap
        </button>
        <button @click="${this.clear}">
          ${this.running ? 'Stop' : 'Clear'}
        </button>
      </div>
    `;
  }

  toggleStartStop() {
    this.dispatchEvent(new CustomEvent('toggle-start-stop'));
  }

  lap() {
    this.dispatchEvent(new CustomEvent('lap'));
  }

  clear() {
    this.dispatchEvent(new CustomEvent('clear'));
  }
}

window.customElements.define('stopwatch-controls', StopwatchControls);
