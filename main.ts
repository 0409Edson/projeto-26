function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudar(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicar(5, 10);
const saudacao = saudar("Juliana");

console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
console.log(saudacao);

// DOM manipulation to show results on the page
document.addEventListener('DOMContentLoaded', () => {
    const resultElement = document.getElementById('resultado');
    const greetingElement = document.getElementById('saudacao');

    if (resultElement) {
        resultElement.innerText = `Resultado da multiplicação (5 * 10): ${resultadoMultiplicacao}`;
    }

    if (greetingElement) {
        greetingElement.innerText = saudacao;
    }
});
