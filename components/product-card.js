class productCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.img = this.getAttribute("img");
    this.title = this.getAttribute("title");
    this.collection = this.getAttribute("collection");
    this.description = this.getAttribute("description");
    this.price = this.getAttribute("price");
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    
    <article class="card">
     <section class="top-side">
     <span class="mark-text">${this.title.split(" ")[0]}</span>
     <figure class="product-container">
       <img class="product" src="${this.img}"/>
       </figure>
     </section>
     <section class="bottom-side">
     <h1 class="product-name">${this.title}</h1>
     <h2 class="product-collection">${this.collection}</h2>
     <p>${this.description}</p>
     <div class="buying-side">
     <span class"product-price">${this.price}</span>
     <button>Buy now</button>
     </div>
     </section>
    </article>

    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    
    <style>
    * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    }

    :host {
    --primary-color: #47559f;
    --secondary-color: #ffffff;
    --title-color: #333333;
    --description-color: #2e2e2e;
    --mark-background-text-color:rgb(57, 67, 116);
    --rounded-btn-radius: 15px;
    --mark-font-size: 100px;
    --mark-font-family: Roboto;
    }

    
    .product-name {
    color:var(--title-color);
    font-size:35px;
    }
    
    .product-collection {
      color:#222222;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      font-size:15px;
      font-weight:400;
    }
    
    
    .product-price {
      
      font-weight:800;
      color:yellow;
      
    }
    
    .card {
    width:100%;
    min-width: 300px;
    max-width: 600px;
    }

    .card .top-side {
    background-color: var(--primary-color);
    }

    .card .bottom-side {
    background-color: var(--secondary-color);
    padding:2rem 1rem;
    }

    .mark-text {
    position:absolute;
    color: var(--mark-background-text-color);
    font-weight:800;
    font-size: var(--mark-font-size);
    font-family: var(--mark-font-family);
    transform: translate(20px, 10px);
    align-self:flex-start;
    }

    .product-container {
    position:relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width:100%;
    }

    .product {
      max-width: 70%;
      position:relative;
      top:3rem;
    }

    </style>
    

    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("product-card", productCard);

