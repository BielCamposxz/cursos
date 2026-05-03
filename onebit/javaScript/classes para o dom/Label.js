import { Component } from "./Component.js";

class Label extends Component { 
    constructor(dom, For, texto) {
        super(dom)
        this.For = For
        this.texto = texto
    }

    addFor() {
        document.querySelector('label').setAttribute('for', this.For)
        document.querySelector('label').innerText = this.texto
    }
 }

export { Label }