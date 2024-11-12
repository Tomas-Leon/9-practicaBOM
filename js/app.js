console.log(window)

function saludar () {
    document.write('<p>Hola!!!</p>')
}

function saludarPersona (nombre){
    document.write(`<p>Hola ${nombre} 😉</p>`)
}

setTimeout(saludar, 3000)
setTimeout(()=> saludarPersona ('Tomas'), 5000)