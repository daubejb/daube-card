const template = document.createElement('template');
template.innerHTML = `
  <style>

    :host {
      display: block;
      font-size: 1rem;
      font-family: Helvetica, Verdana, sans-serif;
      color: rgba(0,0,0,0.87);
      margin: 0;
      padding: 0;
      z-index: 0;
    }

    :host([hidden]) {
      display: none;
    }

    .daubecard {
      max-width: 45rem;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      border-radius: 3px;
      padding: 1.25rem 2rem 1.25rem 2rem;
      margin: 0 auto;
      margin-top: 2rem;
      background-color: white;
    }

  </style>

  <div class="daubecard">
    <slot></slot>
  </div>
`

if (window.ShadyCSS) {
  ShadyCSS.prepareTemplate(template, 'daube-card');
}

class DaubeCard extends HTMLElement {
  static get observedAttributes() {
    return ['cardcolor'];
  }

  get cardcolor() {
    return this._cardcolor;
  }

  set cardcolor(v) {
    if (this._cardcolor === v) return;
    this._cardcolor = v;
    this.setAttribute('cardcolor', v);
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const hasValue = newValue !== null;
    switch (name) {
      case 'cardcolor':
      this.processCardColor();
      break;
    }
  }
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    if (window.ShadyCSS) {
      ShadyCSS.styleElement(this);
    }
  }

  processCardColor() {
    var daubeCard = this.getCard();

    if (this.hasAttribute('cardcolor')) {
      daubeCard.style.backgroundColor = this.getAttribute('cardcolor');
    } else {
      daubeCard.style.removeProperty('background-color');
    }
  }

  getCard() {
    return this.shadowRoot.querySelector('.daubecard');
  }

} // Class CustomElement
customElements.define("daube-card", DaubeCard);