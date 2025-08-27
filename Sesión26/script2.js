//SWITCH/CASE

let numDay = 1
let nomDay = "A"

/* Averiguar el dia de la semana, sabiendo que 
1 -> lunes
2 -> martes
3 -> miercoles
4 -> jueves 
5 -> viernes
otro -> fin de semana*/

switch (numDay) {
    case 1:
        nomDay = ("Lunes")
        break
    case 2:
        nomDay = ("Martes")
        break
    case 3:
        nomDay = ("Miércoles")
        break
    case 4:
        nomDay = ("Jueves")
        break
    case 5:
        nomDay = ("Viernes")
        break
    default:
        nomDay = ("Fin de semana")
        break
}

console.log(nomDay) 

/*En una maquina expendedora de bebidas se tienen opciones:
A -> Cafe
B -> Te 
C -> Cocoa
D -> Leche
*/

let opcion = "A"

switch (opcion) {
    case "A":
        console.log("Café")
        break
    case "B":
        console.log("Té")
        break
    case "C":
        console.log("Cocoa")
        break
    case "D":
        console.log("Leche")
        break
    default:
        console.log("Opción no válida")
        break
}


/*Determinar que es:
caso 1: niño es menor a 12
caso 2: adolescentes  entre 12 y 18 años
caso 3: adulto entre 18 y 60 años 
caso 4: adulto mayor de 60 años
*/

let edad = 22

switch (true) {
    case (edad < 0):
        console.log("Edad no válida")
        break
    case (edad < 12):
        console.log("Niño")
        break
    case (edad >= 12 && edad < 18):
        console.log("Adolescente")
        break
    case (edad >= 18 && edad < 60):
        console.log("Adulto")
        break
    case (edad >= 60):
        console.log("Adulto mayor")
        break
    default:
        console.log("Edad no válida")
        break
}
