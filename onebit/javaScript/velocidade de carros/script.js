const carro1 = window.prompt("nome do carro 1");
const carro2 = window.prompt("nome do carro 2");
const vel1 = window.prompt(`velocidade do ${carro1}`);
const vel2 = window.prompt(`velocidade do ${carro2}`);

if (vel1 == vel2) {
    window.alert("os dois carros tem a mesma velocidade");
} 
else {
    if (vel1 > vel2) {
    window.alert(`o carro ${carro1} e mais rapido que o ${carro2}`);
    }
    else {
    if (vel1 < vel2) {
        window.alert(`o carro ${carro2} e mais rapido que o ${carro1}`);
        }
    }
}
