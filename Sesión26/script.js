//variable

let edadTeo= 15
let edadHarry= 19

//determinar si el usuario es mayor de edad mostrar en la consola

if(edadTeo>=18){
    console.log("Usuario es mayor de edad")
}else{
    console.log("Usuario no es mayor edad")
}

let clima = "nublado"

//Si el clima es nublado usar chompa, sino no usar chompa

if (clima = "nublado"){
    console.log("Usuario debe usar chompa")
} else{
    console.log("Usuario no debe usar chompa")
}

/*Si e usuario es mayor a 18 años es mayor de edad,
  Si es usuario es mayor a 13 años es adolescente,
  Si el usuario es menor a 13 años es niño. */

let edad = 4

if (edad >= 18){
    console.log ("Es mayor de edad")
}else if (edad>=13){
    console.log ("Es adolescente")
}else if (edad>0){
    console.log ("Es niño")
}else{
    console.log ("Esa edad no existe")
}

let nota = 20

/* Si la nota es mayor o igual a 18 colocar excelente,
   Si la nota es mayor o igual a 16 colocar muy bien,
   Si la nota es mayor o igual a 14 colocar bien,
   Si la nota es mayor o igual a 11 colocar debes mejorar,
   Si la nota es mayor o igual a 7 colocar debes estudiar,
   Si la nota es mayor o igual a 2 colocar debes pedir ayuda.*/

if (nota >= 18){
    console.log ("Excelente")

}else if (nota >= 16){
    console.log ("Muy bien")

}else if (nota >= 14){
    console.log ("Bien")

}else if (nota >= 11){
    console.log ("Debes mejorar")

}else if (nota >= 7){
    console.log ("Debes estudiar")

}else{
    console.log ("Debes pedir ayuda")
}



//Operadores lógicos "Y" (&&) "O" (||)
isRestaurantOpen = true
isMoney = true

//Ejemplo usando la &&
//Podemos comprar pizza

if(isRestaurantOpen && isMoney){
    console.log("Si puede comprar pizza (˶˃ ᵕ ˂˶)")

}else{
    console.log("No puede comprar pizza ｡°(°¯᷄◠¯᷅°)°｡")
}


isSabado = false
isDomingo = false

//Si es sabado o domingo puedo salir a jugar, caso contrario debo ir a estudiar

if (isSabado || isDomingo){
    console.log ("Puedo salir a jugar ꉂ(˵˃ ᗜ ˂˵)")

}else{
    console.log ("Debo ir a estudiar (╥﹏╥)")
}