import { Div } from "./div.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";



const div = new Div('div')
div.render()

const label = new Label('label', 'input1', 'escreva seu nome')
label.render()
label.addFor()

const input = new Input('input', 'input1')
input.render()
input.addId()

const form = new Form('form')
form.render()
form.addForm('textarea')


const campoDeText = document.querySelector('input')
const divPai = document.querySelector('div')
const inf = document.querySelector('label')
const formulario = document.querySelector('form')
formulario.append(inf, campoDeText)
divPai.appendChild(formulario)



