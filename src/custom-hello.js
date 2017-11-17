class CustomHello extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        let header = document.createElement('h1')
        header.innerHTML = "Hello I'm a Web Component!"
        this.appendChild(header)
    }
}

customElements.define('custom-hello', CustomHello)