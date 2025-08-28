//for()
//sumar los elementos de un ARRAY


let numeros = [2, 8, 5, 9, 21]
let total = 0

for (let i = 0; i < numeros.length;i++ ) {
    total=total+numeros[i]
}

console.log (total)

//sumar todos los números del 0 al 1000

let sumador=0
for (let i=0; i<=1000; i++){
    sumador=sumador+i
}

console.log (sumador)

//Sumar todos los números del 1 al mil que sean pares

let sumaPares = 0;
for (let i = 2; i <= 1000; i += 2) {
    sumaPares += i;
}
console.log(sumaPares);

//while y do. . while

//Mostrar los numeros del 1 al 10
let numero=1
do{
 console.log(numero)
 numero += 1
}while(numero<=10)

//sumar los numeros divisibles entre 3 del 1 al 100