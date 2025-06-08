import { Component } from "./Component.js";

class Form extends Component { 
    addForm(dom) {
        const filho = new Component(dom)
        filho.render()
    }
 }

export { Form }