const lugarInput = document.getElementById('lugar');
const weatherDetails = document.getElementById('weatherDetails');
const searchBtn = document.querySelector('button');

async function fazendoRequisicao(lugar) {
    const response = await fetch(`https://api.weatherstack.com/current?access_key=56aa37d3a24def32d315d2ba321eaaa7&query=${lugar}`);
    if (!response.ok) throw new Error('Is this really a city, country or state?');
    try {
        const resultado = await response.json();
        console.log(resultado);
        return resultado;
    } catch (err) {
        console.log(err);
    }
}

function criarItems({ current, location }) {
    weatherDetails.innerHTML = '';

    const umidade = cadaItem('Umidade', current.humidity);
    const temperatura = cadaItem('Temperatura', current.temperature);
    const descricao = cadaItem('Descrição', current.weather_descriptions[0]);
    const velocidadeDoVento = cadaItem('Vento', current.wind_speed);
    const estado = cadaItem('Estado', location.region);
    const pais = cadaItem('Pais', location.country);

    document.getElementById('local').textContent = `${location.name}`;
    const icone = document.createElement('img');
    icone.src = current.weather_icons[0];
    icone.id = 'weather_icons';
    weatherDetails.append(estado, pais, umidade, temperatura, velocidadeDoVento, descricao, icone);
}

function cadaItem(string, valor) {
    const elemento = document.createElement('p');
    elemento.innerText = `${string}: ${valor}`;
    return elemento;
}

searchBtn.addEventListener('click', async (ev) => {
    ev.preventDefault();

    if (typeof lugarInput.value !== 'string') {
        throw new Error('values ​​are not valid');
    }

    try {
        const dados = await fazendoRequisicao(lugarInput.value);
        criarItems(dados);
    } catch (err) {
        console.log('Erro: ' + err);
    }

    lugarInput.value = '';
});

