import { Component } from "./Component.js";

class Input extends Component { 
    constructor(dom, id) {
        super(dom)
        this.id = id
    }

    addId() {
        document.querySelector(this.dom).id = this.id
    }
 }

export { Input }