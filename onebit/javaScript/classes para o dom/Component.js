class Component {
    #ref
    #element
    constructor(dom) {
        this.#ref = document.getElementById('body')
        this.contruir = this.build()
        this.dom = dom
    }

    lerDom() {
        return this.#ref
    }

    build() {
        return this.#element = document.createElement(this.dom)
    }

    render() {
        const component = this.lerDom()
        const componentCriado = this.build()
        component.appendChild(componentCriado)
    }
}

export { Component }
