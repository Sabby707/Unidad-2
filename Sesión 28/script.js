let frutas = ["manzana", "pera", "platano"] 

console.log (frutas)

//METODOS PARA AGREGAR ELEMENTOS AL ARRAY
//AGREGAR ADELANTE

frutas.unshift("sandia")

//Agregar al final

frutas.push("ciruela")
console.log (frutas)

//METODOS PARA ELIMINAR ELEMENTOS DEL ARRAY
//ELIMINAR EL PRIMERO

frutas.shift()

//ELIMINAR EL ULTIMO

frutas.pop()

console.log(frutas)

//EDITAR UN VALOR DEL ARRAY

frutas[1]="papaya"

console.log(frutas)


//PROCESAR PARA EL HTML

for (let fruta of frutas){

    document.getElementById("contenido").innerHTML += fruta + ","
    
}

//Procesar para colocar las frutas en el div

for(let fruta of frutas){
    document.getElementById("contenido").innerHTML += fruta + ","
}

//Procesar para colocar las frutas en la ul

for(let fruta of frutas){
    document.getElementById("canasta").innerHTML += `<li>${fruta}</li>`
}
    