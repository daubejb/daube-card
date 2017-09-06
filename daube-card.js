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
    }

    :host([hidden]) {
      display: none;
    }

    .daubecard {
      max-width: 45rem;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      border-radius: 3px;
      padding: 1.25rem 2rem 4rem 2rem;
      margin: 0 auto;
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
  static get observedAttributes() {}
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
} // Class CustomElement
customElements.define("daube-card", DaubeCard);