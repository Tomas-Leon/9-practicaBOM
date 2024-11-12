console.log(window)

function saludar () {
    document.write('<p>Hola!!!</p>')
}

function saludarPersona (nombre){
    document.write(`<p>Hola ${nombre} 😉</p>`)
}

function saludarMundo (){
    document.write(`<p>Hola Mundo 🌍</p>`)
    if (contador === 10){
       //detener intervalo 
       clearInterval(idInterval)
    }
    contador++  
}

setTimeout(saludar, 2000)
setTimeout(()=> saludarPersona ('Tomas'), 5000)

//setInterval: ejejcuta una funcion cada cierto tiempo en milisegundos

let contador = 1;

const idInterval = setInterval(saludarMundo, 2000)