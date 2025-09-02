    let texto1 = document.getElementById("texto1")

    texto1.style.fontSize = "30px"

    texto1.classList.add("prueba")

    texto1.textContent += "hola"

    //Coloca estilo al texto

    function colocar(){
        texto1.classList.add("prueba")
    }

    //quita estilo al texto

    function quitar(){
        texto1.classList.remove("prueba")
    }





    let foco = document.getElementById("foco")
    let btnFoco = document.getElementById("btnFoco");

    // Prender foco
    function interruptor(){
        if (foco.src.includes("apagado.png")){
            foco.src = "prendido.png";           
        }else {
            foco.src = "apagado.png";
        }


    }


    

