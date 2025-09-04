let precios = [20, 15, 5, 12]

document.getElementById("original").innerHTML=precios.join(" , ")

//aumentar una unidad a cada valor

let precios2 = precios.map(function(value){
   return value +1;
})

document.getElementById("demo1").innerHTML= precios2

//filtrar precios mayores a 12

let precios3= precios.filter(function(value){
    return value >12
})

document.getElementById("demo2").innerHTML= precios3

//Sumar todos los precios

let precios4 = precios.reduce(function(total, valor){
   return total+valor
})
document.getElementById("demo3").innerHTML= precios4

//Ordenar ascendente
precios.sort(function(a,b){
   return a - b
})

document.getElementById("demo4").innerHTML=precios


//Ordenar desendente
precios.sort(function(a,b){
   return b - a
})

document.getElementById("demo5").innerHTML=precios

//Mostrar los valores del arreglo en una lista desordenada
precios.forEach(function(valor,i){
   document.getElementById("demo6").innerHTML += `
   <li>${i+1} - ${valor}</li>
   `
})