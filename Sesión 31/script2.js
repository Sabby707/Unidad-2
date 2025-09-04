let ciudades =["lima", "arequipa","piura", "iquitos"]

document.getElementById("original2").innerHTML=ciudades

//crear un subarreglo de la posicion 2 al final

let subCiudades = ciudades.slice(2,ciudades.length)

document.getElementById("demo5").innerHTML= subCiudades

//Reemplazar Piura y Iquitos por Cajamarca y La Libertad

ciudades.splice(2,0,"Cajamarca", "La Libertad")

document.getElementById("demo6").innerHTML = ciudades

// verificar si exite Cajamarca luego hallar su posicion

if(ciudades.includes("Cajamarca")){
    document.getElementById("demo7").innerHTML="La posicion es: "+ciudades.indexOf("Cajamarca")
}else{
    document.getElementById("demo7").innerHTML="No exite"
}