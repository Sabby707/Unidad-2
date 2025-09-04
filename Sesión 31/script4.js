//juego de dados

let dado = Math.floor (Math.random()*7)+1
document.getElementById("demo1").innerHTML = dado

//Numero y minimo de un Array

let numeros =[1,45,12,21,10]

let maximo = Math.max(...numeros)
document.getElementById("demo2").innerHTML = maximo

let minimo = Math.min(...numeros)
document.getElementById("demo3").innerHTML = minimo

//número aleatorio entre el 10 y el 20

let numero = Math.floor(Math.random() * (20 - 10 + 1)) + 10
document.getElementById("demo4").innerHTML = numero

//Fecha del sistema

let hoy= new Date().toLocaleDateString("es-PE")

let final= new Date(2025,11,20).toLocaleDateString("es-PE")

document.getElementById("demo5").innerHTML=`hoy es: ${hoy} y el final es: ${final}`


//Calculo de mi edad

let fechaNacimiento = new Date(2008,2,5)

let hoy2 = new Date()

let edad = hoy2.getFullYear() - fechaNacimiento.getFullYear()

document.getElementById("demo6").innerHTML = edad

//Día de la semana

let dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

let hoyDia = new Date().getDay()
let nombreDia = dias[hoyDia]

document.getElementById("demo7").innerHTML = `Hoy es: ${nombreDia}`
