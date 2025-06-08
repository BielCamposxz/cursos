const valor = document.getElementById('valor')
let saldo = document.getElementById('saldo')
const historico = document.getElementById('historico')
const nome = document.getElementById('nome')
const enviar = document.getElementById('enviar')
const form = document.querySelector('form')
const editarBtn = document.getElementById('editar')
let saldoAtual = 0
let i = 0
saldo.innerText = saldoAtual

function mostrarNaTela(item) {
    const editar = document.createElement('button');
    editar.innerText = 'editar';
    editar.classList.add('editar');
    editar.dataset.id = item.id;

    const deletar = document.createElement('button');
    deletar.classList.add('deletar');
    deletar.innerText = 'deletar';
    deletar.dataset.id = item.id;

    const valorSpan = document.createElement('span');
    valorSpan.classList.add('valor');

    const linha = document.createElement('div');
    linha.classList.add('linha');

    const info = document.createElement('span');
    info.classList.add('info');
    info.innerText = item.nome;

    const actions = document.createElement('div');
    actions.classList.add('actions');
    actions.append(valorSpan, editar, deletar);

    linha.append(info, actions);
    historico.append(linha);

    // Chama a função mudarCor para definir a cor do valor
    mudarCor(valorSpan, item.valor);

    editar.addEventListener('click', async (ev) => {
        ev.preventDefault();
        const alvo = ev.target.dataset.id;

        const novoValor = prompt('Digite o novo valor');
        const novoNome = prompt('Digite o novo nome');

        if (isNaN(novoValor) || typeof novoNome !== 'string' || !novoValor.trim()) {
            alert('Os valores inseridos não são válidos.');
            return;
        }

        const valores = { valor: novoValor, nome: novoNome };

        try {
            const resposta = await fetch(`http://localhost:3000/trasferencias/${alvo}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(valores)
            });

            const salvar = await resposta.json();
            info.innerText = salvar.nome;
            valorSpan.innerText = `R$ ${salvar.valor}`;
            
            // Atualiza a cor após edição
            mudarCor(valorSpan, salvar.valor);
        } catch (err) {
            console.error('Erro: ' + err);
        }
    });

    // diminuir o valor do saldo quando excluir algo
    deletar.addEventListener('click', async (ev) => {
        ev.preventDefault();
        const alvo = ev.target.dataset.id;

        try {
            const resposta = await fetch(`http://localhost:3000/trasferencias/${alvo}`, { method: 'DELETE' }).then(res => res.json())
            historico.removeChild(linha);
            mudarSaldo(saldoAtual - resposta.valor)
        } catch (err) {
            console.error('Erro: ' + err);
        }
    });
}

// enviando a requisicao
form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    if (isNaN(valor.value) || typeof nome.value !== 'string') {
        throw new Error('the values ​​entered are not valid');
    }

    try {
        const valores = {
            id: i.toString(),
            valor: document.getElementById('valor').value,
            nome: document.getElementById('nome').value
        }
        const resposta = await fetch('http://localhost:3000/trasferencias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
    })
        if(!resposta.ok)  throw new Error(`Erro: ${resposta.status}`)
        const salvar = await resposta.json()
    
        form.reset()
        mostrarNaTela(salvar)
        
        mudarSaldo(salvar.valor)
    }
    catch(err) {
        console.log('Erro: ' + err)
    }
})

async function pegandoOsDados() {
    try{
        const resultado = await fetch('http://localhost:3000/trasferencias').then(res => res.json())
        
        resultado.forEach(element => {
            mostrarNaTela(element)
            mudarSaldo(element.valor)
           
        });
    }
    catch(err) {
        console.log('Erro: ' + err)
    }
}

function mudarSaldo(preco) {
    saldoAtual += parseFloat(preco);
    saldo.innerText = saldoAtual
}

window.addEventListener('DOMContentLoaded', async (ev) => {
    ev.preventDefault()

    pegandoOsDados()
})

function mudarCor(elemento, valor) {
    if (valor >= 0) {
        elemento.style.color = "green";
        elemento.innerText = `R$ ${valor} C`;
    } else {
        elemento.style.color = "red";
        elemento.innerText = `-R$ ${Math.abs(valor)} D`;
    }
}