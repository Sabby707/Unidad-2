//Objetos

let usuario= {
    nombre: "Jaehee",
    edad: 26,
    sexo: "F",
    estudios: {
        primaria: "jsc",
        secundaria: "jsc"
    
    }
}


console.log (usuario)


//Llamar a una clave del objeto

console.log(usuario.nombre)

//Cambiar el valor de la clave de un objeto

usuario.nombre = "Seven"
console.log (usuario.nombre)

//Valores de formulario

function enviar (){

let formulario = document.getElementById("usuario")


usuario.nombre = formulario.nombre.value
usuario.edad = formulario.edad.value
usuario.sexo = formulario.sexo.value

console.log(usuario)




//Mostrar los valores en el html


let lista = document.getElementById("datos");
    lista.innerHTML = 
       `<li><b>Nombre:</b> ${usuario.nombre}</li>
        <li><b>Edad:</b> ${usuario.edad}</li>
        <li><b>Sexo:</b> ${usuario.sexo}</li>`;

    }

    //Mostrar heroes por consola 
 console.log(heroes)
 console.log(heroes.squadName)
 console.log(heroes.members[0])
 console.log(heroes.members[0].powers)

 //cargar json

 const answer = fetch(usuario.json)

 const datos = await answer.json()

 console.Log(datos)