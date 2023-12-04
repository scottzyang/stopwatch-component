import { LitElement, css, html } from 'lit';

export class StopwatchDisplay extends LitElement {
  constructor() {
    super()
  }

  static get properties() {
    return {
      elapsedTime: { type: Number },
    };
  }

  render() {
    const minutes = Math.floor(this.elapsedTime / 60);
    const seconds = this.elapsedTime % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return html` <div id="display">${formattedTime}</div> `;
  }
}

window.customElements.define('stopwatch-display', StopwatchDisplay);
