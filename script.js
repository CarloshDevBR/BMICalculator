const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    calc()
})

function calc() {
    const alt = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    
    if (alt && peso) {
        const res = (peso / (alt * alt)).toFixed(2)

        const nivel = resNivel(res)

        const converted = res.toString().replace('.', ',')

        newElement(converted, nivel)
    } return !alt && alert('digite os valores')
}

function newElement(valor, descricao) {
    const element = `<p>o IMC é: ${valor} (${descricao})</p>`

    document.querySelector('#res').innerHTML = element
}

function resNivel(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}