let limite = document.getElementById("lim");
let velatingida = document.getElementById("v");
let divSaida = document.getElementById("saida");
let botao = document.getElementById("calcular");

function calcularVel(velmax, carro) {
  if (carro <= velmax) {
    return (divSaida.innerText = "Você está dentro do limite de velocidade");
  } else {
    let result = carro - velmax;

    let percent = (result / velmax) * 100;

    if (percent <= 20) {
      return (divSaida.innerText = "Você excedeu ${percent}% a velocidade máxima.Sua multa é de R$130,16");
    } else if (20 < percent <= 50) {
      return (divSaida.innerText = "Você excedeu ${percent}% a velocidade máxima.Sua multa é de R$195,23");
    } else if (percent > 50) {
      return (divSaida.innerText = "Você excedeu ${percent}% a velocidade máxima.Sua multa é de R$880,41");
    }
  }
}

function calculartotal() {
  calcularVel(Number(limite.value), Number(velatingida.value));
}

botao.onclick =calculartotal();