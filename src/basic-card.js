function logHello() {
  console.log('Great!');
}
class BasicCardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <div class="card-container">
        <div class="title-description">
          <h2 class="card-title">cardTitle</h2>
          <i class="card-description">cardDescription</i>
        </div>
        <div class="content">
          <p class="card-content">cardContent</p>
        </div>
        <div class="button-container">
          <button onclick="logHello()"> OK </button>
        </div>
      </div>
      <style>
        .card-container {
          font-family: sans-serif;
          width: 400px;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 5px;
          box-shadow: 2px 2px 2px black;
          padding: 30px;
          margin: 20px;
        }
        .content {
          height: 150px;
        }
        .button-container {
          display: flex;
          justify-content: flex-end;
        }
        button {
          width: 90px;
          height: 32px;
          background: none;
          border: 1px solid black;
          border-radius: 5px;
        }
        button:hover {
          background-color: whitesmoke;
        }
      </style>
    `;
  }
}

customElements.define('basic-card-component', BasicCardComponent);