// Definir la clase Usuario
class Usuario {
    constructor(nombre, email, fechaNac) {
        this.nombre = nombre;
        this.email = email;
        this.fechaNac = new Date(fechaNac);
        this.variable = "-";
    }

    // Método saludar
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y mi email es ${this.email}`);
    }

    // Método edad
    edad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNac.getFullYear();
        const mes = hoy.getMonth() - this.fechaNac.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNac.getDate())) {
            edad--;
        }
        return edad;
    }

    // Método signo zodiacal
    signoZodiacal() {
        const dia = this.fechaNac.getDate();
        const mes = this.fechaNac.getMonth() + 1;

        if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "Aries";
        if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "Tauro";
        if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "Géminis";
        if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "Cáncer";
        if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "Leo";
        if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "Virgo";
        if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "Libra";
        if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "Escorpio";
        if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "Sagitario";
        if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "Capricornio";
        if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "Acuario";
        if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "Piscis";
    }
}

//Crear objetos

const usuario1 = new Usuario('Saeyoung Choi', "dioshacker707@gmail.com", '2004-06-11');

usuario1.saludar();
console.log(`Mi edad es ${usuario1.edad()} años.`);
console.log(`Mi signo zodiacal es ${usuario1.signoZodiacal()}`); // Salida: Géminis

console.log(usuario1.variable);


//Herencia

class Empleado extends Usuario {
    constructor(nombre, email, fechaNac, cargo, sueldo) {
        super(nombre, email, fechaNac);
        this.cargo = cargo;
        this.sueldo = sueldo;
    }

    //Metodos

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y mi cargo es ${this.cargo}`);
    }
}

const empleado1 = new Empleado('Jaehee Kang', 'jaehee.kang@gmail.com', '2000-12-28', 'Asistete Ejecutiva', 5000);

empleado1.saludar();
console.log(`Mi edad es ${empleado1.edad()} años.`);
console.log(`Mi salario es de ${empleado1.sueldo} dolares .`);


console.log(usuario1.variable);

//Estudiante

class Estudiante extends Usuario {
    constructor(nombre, email, fechaNac, carrera, pension) {
        super(nombre, email, fechaNac);
        this.carrera = carrera;
        this.pension = pension;
    }

    //Metodos

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y mi carrera es ${this.carrera}`);
    }
}

const Estudiante1 = new Estudiante('Yoosung Kim', 'supermanyoosung@gmail.com', '2005-03-12', 'Veterinaria', 500);

Estudiante1.saludar();
console.log(`Mi edad es ${Estudiante1.edad()} años.`);
console.log(`Mi pension es de ${Estudiante1.pension} dolares .`);

console.log(usuario1.variable);


//objetos



class Animal {
    constructor(nombre, sonido, movimiento, habitat) {
        this.nombre = nombre;
        this.sonido = sonido;
        this.movimiento = movimiento;
        this.habitat = habitat;
    }

    //Metodos
    Sonido() {
        console.log(`${this.nombre} hace ${this.sonido}`);
    }

    moverse() {
        console.log(`${this.nombre} se mueve ${this.movimiento}`);
    }
}

//Perro
const animal1 = new Animal('Perro', 'Guau Guau', 'corriendo', 'hogares humanos o en zonas urbanizadas');
console.log(animal1.nombre);
animal1.Sonido();
animal1.moverse();
console.log(`El hábitat del ${animal1.nombre} es en ${animal1.habitat}`);

console.log(usuario1.variable);

//Gato
const animal2 = new Animal('Gato', 'Miau Miau', 'caminando', 'hogares humanos o en zonas urbanizadas');
console.log(animal2.nombre);
animal2.Sonido();
animal2.moverse();
console.log(`El hábitat del ${animal2.nombre} es en ${animal2.habitat}`);

console.log(usuario1.variable);



class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.area = this.calcularArea();
    }

    calcularArea() {
        this.area = (this.base * this.altura) / 2;
        return this.area;
    }

    mostrarArea() {
        console.log(`El área del triángulo es: ${this.area} 
                        ♡  ╱|、
                          (˚ˎ 。7  
                           |、˜〵          
                          じしˍ,)ノ`);
    }
}

const triangulo1 = new Triangulo(10, 15);
triangulo1.mostrarArea();
